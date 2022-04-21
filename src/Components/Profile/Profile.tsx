import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import Style from "./style.module.css";
import { login } from "../../Redux/tokenSlice";
import { getCurrentUser } from "../../Utils/Services";

function Profile() {
  const User = useAppSelector(state => state.token.user);
  const Token = useAppSelector(state => state.token.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCurrentUser(Token).then(data => dispatch(login(data)));
  }, [dispatch, Token]);
  
  return (
    <div className={Style.profile}>
      {User.images && (
        <>
          <div className={Style.image}>
            <img src={User.images[0].url} alt={User.display_name}/>
          </div>     
          <p><i className="fa fa-user" /> {User.display_name}</p>
         </>
      )}
    </div>
  );
}

export default Profile;
