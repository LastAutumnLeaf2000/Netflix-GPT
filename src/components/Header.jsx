import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/images";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  // console.log(user);

  useEffect(() => {
    //whenevr the user state changes login/logout etc, this functon runs
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //all navigates inside this fnc and nowhere else
      if (user) {
        //if user is already signed in...it keeps him in browse page
        // User is signed in,
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName })); //passed as obj with key:value pair
        navigate("/browse");
      } else {
        //if user is not signed in go to login page
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        toast.error("Error");
        console.log(error);
      });
  };

  return (
    <div className="absolute top-0 bg-gradient-to-b from-black saturate-200">
      {LOGO}
      {user && (
        <div>
          <h1 className="absolute bg-[#571216] cursor-default font-semibold text-white rounded-md text-lg px-6 py-1 top-5 right-36">
            <i className="fa-solid fa-user"></i> {user.displayName}
          </h1>
          <button
            onClick={handleSignOut}
            className="absolute bg-[#E50914] hover:bg-[#521216] text-white rounded-md text-lg px-2 py-1 top-5 right-5"
          >
            <i className="fa-solid fa-right-from-bracket"></i> Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
