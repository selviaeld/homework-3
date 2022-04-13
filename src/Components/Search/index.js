import React from "react";
import Style from "./style.module.css";

function Index({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input className={Style.input} type="text" name="query" placeholder="Search Song.." autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" maxLength="25" />
    </form>
  );
}

export default Index;
