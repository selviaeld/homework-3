import React from "react";
import Image from "./styles.css";

function index(props) {
    return (
        <div className={Image.image}>
            <img src={props.src} alt="" />
        </div>
    );
}

export default index;
