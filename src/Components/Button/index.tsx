import React from "react";
import style from "./style.module.css";

function index({text, handleForm }: {text: string, handleForm: React.MouseEventHandler<HTMLButtonElement>}) {
  return (
    <button className={style.btn} onClick={handleForm}>
      {text}
    </button>
  );
}

export default index;
