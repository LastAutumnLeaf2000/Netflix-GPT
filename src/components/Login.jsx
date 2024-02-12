import React, { useRef, useState } from "react";
import Header from "./Header";
import { LoginBG } from "../utils/images";
import { checkValidation } from "../utils/validate";

const Login = () => {
  const [signIn, setsignIn] = useState(true);
  const [err, seterr] = useState(null);

  const email = useRef(null); //set them as null and not ""
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email?.current?.value);
    // console.log(password?.current?.value);
    // console.log(name?.current?.value);
    // checkValidation(email, password)
    // console.log(email);
    const error = checkValidation(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value //very important to give (?.)- doesnt throw error
    );
    seterr(error);
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
