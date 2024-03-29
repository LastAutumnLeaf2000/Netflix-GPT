import React, { useRef, useState } from "react";
import Header from "./Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginBG } from "../utils/images";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signIn, setsignIn] = useState(true);
  const [err, seterr] = useState(null);

  const dispatch = useDispatch();


  const email = useRef(null); //set them as null and not ""
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = checkValidation(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value //very important to give (?.)- doesnt throw error
    );
    seterr(error);

    if (error) return; //returns if there is an error

    //signIn signup Logic
    if (signIn) {
      //signIn logic
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          toast.success("Login Successful");
        })
        .catch((error) => {
          const errorCode = error.code;
          seterr(errorCode);
          toast.error(errorCode);
        });
    } else {
      //signUp logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
              toast.success("Account Created");
            })
            .catch((error) => {
              // An error occurred
              seterr(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          seterr(errorCode);
          toast.error(errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="">
        {LoginBG}
        {/*have to use the img tag this way coz <img/> already a tag in utils */}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-evenly items-center absolute w-3/12 h-3/6  left-0 right-0 m-auto top-0 bottom-0 text-white bg-gradient-to-tr from-black rounded-lg"
      >
        <h1 className="text-2xl font-medium">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            required
            type="text"
            placeholder="Full Name"
            className="p-2 w-3/4 bg-[#121212] rounded-md"
            autoComplete="off"
          />
        )}
        <input
          ref={email}
          type="email"
          required
          placeholder="Email Address"
          className="p-2 w-3/4 bg-[#121212] rounded-md"
          autoComplete="off"
        />

        <input
          ref={password}
          type="password"
          required
          placeholder="Password"
          autoComplete="off"
          className="p-2 w-3/4 bg-[#121212] rounded-md"
        />
        <p className="text-center text-red-400">{err}</p>
        <button
          type="submit"
          className="px-4 py-2 bg-[#E50914] hover:bg-[#C11119] text-white rounded-md"
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          onClick={() => setsignIn(!signIn)}
          className="hover:font-medium hover:underline cursor-pointer text-center text-sm"
        >
          {signIn ? "New To Netflix?" : "Already have an Account?"}
        </p>
      </form>
    </div>
  );
};

export default Login;
