import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Style from "./style.module.css";
import { login } from "../../Redux/userSlice";
import { getCurrentUser } from "../../Utils/Services";

function Profile() {
  const User = useSelector(state => state.user.user);
  const Token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser(Token).then(data => dispatch(login(data)));
  }, [dispatch, Token]);
  
  return (
    <div className={Style.profile}>
      {User.images && (
        <>
          <div className={Style.image}>
            <img src={User.images[0].url} alt={User.display_name} />
          </div>     
          <p><i className="fa fa-user" /> {User.display_name}</p>
         </>
      )}
    </div>
  );
}

export default Profile;
