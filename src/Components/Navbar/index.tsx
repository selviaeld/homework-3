import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./style.module.css";

function Index({ handleClick }: {handleClick: React.MouseEventHandler<HTMLButtonElement>}){
  return (
    <header>
      <Link className={Navbar.logo} to="/">
        JAMAICA
      </Link>
      <div className={Navbar.navLeft}>
        <ul>
          <li>Premium</li>
          <li>About</li>
          <li>Support</li>
          <li>
            <button className={Navbar.btnAuth} onClick={handleClick}>Log In</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Index;
