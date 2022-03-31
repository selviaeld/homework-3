import React from "react";
import "./button.css";

function index({text, handleSelect}) {

    return (
        <button type="submit" className="btn" onClick={handleSelect}>{text}</button>
    );
}

export default index;
