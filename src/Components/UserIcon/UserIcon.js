import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import "./UserIcon.css";

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const localData = JSON.parse(localStorage.getItem("user-info"));

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="custom-dropdown">
      <BiUserCircle className="nav-icons" onClick={toggleDropdown} />
      {isDropdownOpen && (
        <div className="dropdown-content">
          {localData?.status !== "success" && (
            <Link to="/signIn">
              <div className="menu-item">Login</div>
            </Link>
          )}
          {localData?.status === "success" && (
            <Link to="/">
              <div
                className="menu-item"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Logout
              </div>
            </Link>
          )}
          {/* <Link to="/subscriptions">
            <div className="menu-item">Subscriptions</div>
          </Link> */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
