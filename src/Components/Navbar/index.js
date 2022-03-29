import React, { useState, useEffect } from "react";
import Search from "../Search/index";
import Button from "../Button";
import Navbar from  "./styles.css";

function Index({ handleSearch, handleClick }) {
  const [Auth, setAuth] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      setAuth(true);
    }
  }, []);

  return (
    <header>
      <div className={Navbar.logo}>MyPlaylist</div>
      {Auth ? (
        <div>
          <Search handleSubmit={handleSearch} />
        </div>
      ) : (
        <div onClick={handleClick}>
          <Button text="AUTH"/>
        </div>
      )}
    </header>
  );
}

export default Index;
