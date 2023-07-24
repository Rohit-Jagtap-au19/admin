import React, { useContext, useState } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";


export default function Topbar() {
  const {dispatch } = useContext(AuthContext);
  const handleClick = () => {
    console.log("logout clicked");
    alert("logout success")
    {
      dispatch(logout());
    }
    // dispatch logout action
  };
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings onMouseEnter={() => setIsHovered(true)} />
          </div>
          {isHovered && (
            <div className="logout" onMouseLeave={() => setIsHovered(false)}>
              <button className="logout-btn" onClick={handleClick}>
                Logout
              </button>
            </div>
          )}
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
