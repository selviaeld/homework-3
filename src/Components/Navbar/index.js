import React from "react";
import Search from "../Search/index";
import Navbar from "./styles.css";
import Profile from "../Profile/Profile";

function Index({ handleSearch }){
  return (
    <header>
      <div className={Navbar.logo}>MyPlaylist</div>
      <div>
        <Search handleSubmit={handleSearch} />
      </div>
      <Profile />
    </header>
  );
}

export default Index;
