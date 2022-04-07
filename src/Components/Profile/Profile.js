import React from "react";
import { useSelector } from "react-redux";
import Style from "./styles.css";

function Profile() {
  const User = useSelector(state => state.user.user);

  return (
    <div className={Style.profile}>
      <p>{User.display_name}</p>
    </div>
  );
}

export default Profile;
