import React from "react";
import { useSelector } from "react-redux";
import "./menulink.css";


export default function MenuLink({onClick, icon, text }) {
  const name = useSelector((state) => state.user.userInfo.name);

  return (
    <div className="menulink" onClick={onClick}>
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && `( ${name} )`}
      </span>
    </div>
  );
}
