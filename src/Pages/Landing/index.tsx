import React from "react";
import Navbar from "../../Components/Navbar";
import Style from "./style.module.css";
import Footer from "../../Components/Footer";

function index() {
  const handleClick = () => {
    const Client_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const Response_Type = "token";
    const Redirect_URI = "http://localhost:3000";
    const Scope = "playlist-modify-private user-library-read";
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${Client_ID}&response_type=${Response_Type}&redirect_uri=${Redirect_URI}&scope=${Scope}&show_dialog=true`;
  };

  return (
    <div>
      <Navbar handleClick={handleClick} />
      <div className={Style.container}>
        <div className={Style.left}>
          <h1>Welcome to..</h1>
          <p>
            Find your favorite songs and artists. Numerous song suggestions will undoubtedly make you fall in love with it. Use this app for 1 month for free, then sign up to become a premium member of our subscription for
            <span className={Style.leftPrice}> $5.99/month.</span>.
          </p>
          <div className={Style.btnAction} onClick={handleClick}>
            Get Started
          </div>
        </div>
        <div className={Style.right}>
          <img 
            src={process.env.PUBLIC_URL + "/images/playlist.svg"}
            alt="music-list" 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default index;
