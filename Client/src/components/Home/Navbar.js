import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await fetch("https://resume-maker-rosy.vercel.app/logout", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (data.status) {
        setUser("");
      }
    } catch (error) {
      // console.error(error);
    }
  };

  const verifyUser = async () => {
    try {
      const res = await fetch("https://resume-maker-rosy.vercel.app/verify-user", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (data.status) {
        setUser(data.user.name);
      }
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <div>
      <header>
        <nav className="items-center pt-5 px-4 sm:px-8 sm:flex sm:space-x-6">
          {!user ? (
            <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
              <li>
                <Link to="/login" className="flex items-center text-gray-200">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="flex items-center text-gray-200">
                  Sign Up
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
              <li className="text-white font-bold">{user}</li>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={logout}
              >
                Logout
              </button>
            </ul>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
