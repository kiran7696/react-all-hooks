import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <Link className="navbar-brand" to='/'>
          All Hooks
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to='/'>
                useState
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/use-effect'>
                useEffect
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/use-memo'>
                useMemo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/use-callback'>
                useCallBack
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/use-usereducer'>
                useReducer
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/use-useref'>
                useRef
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/use-customhook'>
                customHook
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/hoc'>
                HOC
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
