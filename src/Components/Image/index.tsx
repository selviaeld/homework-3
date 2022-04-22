import React from "react";
import Image from "./style.module.css";

function index(props: {src: string}) {
    return (
        <div className={Image.image}>
            <img src={props.src} alt="img" />
        </div>
    );
}

export default index;
