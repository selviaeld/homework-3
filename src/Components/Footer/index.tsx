import React from "react";
import Footer from "./style.module.css";

function Index() {
  return (
    <footer className={Footer.footer}>
  <div className={Footer.footer__addr}>
    <h1 className={Footer.footer__logo}>Jamaica</h1>
        
    <h2>Contact</h2>
    
    <address>
        Somewhere In. The World xxxx-xxxx
          
      <a className={Footer.footer__btn} href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul className={Footer.footer__nav}>
    <li className={Footer.nav__item}>
      <h2 className={Footer.nav__title}>Media</h2>

      <ul className={Footer.nav__ul}>
        <li>
          <a href="#/">Premium</a>
        </li>

        <li>
          <a href="#/">About</a>
        </li>
            
        <li>
          <a href="#/">Support</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item_extra">
      <h2 className={Footer.nav__title}>Tools</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <a href="#/">Recomend</a>
        </li>
        
        <li>
          <a href="#/">Playlist</a>
        </li>
        
        <li>
          <a href="#/">Library</a>
        </li>
        
        <li>
          <a href="#/">Podcast</a>
        </li>
        
        <li>
          <a href="#/">Create Playlist</a>
        </li>
        
        <li>
          <a href="#/">Favorite Songs</a>
        </li>
      </ul>
    </li>
    
    <li className={Footer.nav__item}>
      <h2 className={Footer.nav__title}>Songs</h2>
      
      <ul className={Footer.nav__ul}>
        <li>
          <a href="#/">Pop</a>
        </li>
        
        <li>
          <a href="#/">Jazz</a>
        </li>
        
        <li>
          <a href="#/">My Music</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className={Footer.legal}>
    <p>&copy; 2022 Something. All rights reserved.</p>
    
    <div className={Footer.legal__links}>
      <span>Made with <span className="heart">♥</span> remotely from Anywhere -slv</span>
    </div>
  </div>
</footer>
  );
}

export default Index;
