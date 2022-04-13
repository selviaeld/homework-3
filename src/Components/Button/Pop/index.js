import React from "react";
import Pop from "./style.module.css";

function index({ text, handleForm }) {
  return (
    <button className={Pop.btn} onClick={handleForm}>
      {text}
    </button>
  );
}

export default index;