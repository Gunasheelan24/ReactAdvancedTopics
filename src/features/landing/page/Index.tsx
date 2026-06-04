import React from "react";
import {
  // Link,
  NavLink,
} from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <>
      <header className="flex justify-center mt-4">
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/landing-page"
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
              }
            >
              Landing
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
              }
              to="/about"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs">blogs</NavLink>
          </li>
        </ul>
      </header>

      {/* <p>Link Example </p>
      <Link to="/home">Change url</Link> */}
    </>
  );
};

export default LandingPage;
