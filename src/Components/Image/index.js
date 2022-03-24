import React from "react";
import "./Image.css";

function index(props) {
    return (
        <div className="image">
            <img src={props.src} alt="" />
        </div>
    );
}

export default index;
