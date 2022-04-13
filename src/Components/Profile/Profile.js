import React from "react";
import { useSelector } from "react-redux";
import Style from "./style.module.css";

function Profile() {
  const User = useSelector(state => state.user.user);

  return (
    <div className={Style.profile}>
      <p><i className="fa-duotone fa-user" />{User.display_name}</p>
    </div>
  );
}

export default Profile;
