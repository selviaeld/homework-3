import React from "react";
import Style from "./style.module.css";

interface SearchBoxProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

function Index({ handleSubmit, handleChange }: SearchBoxProps) {
  return (
    <form onSubmit={handleSubmit}>
      <input className={Style.input} onChange={handleChange} type="text" name="query" placeholder="Search Song.." autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
    </form>
  );
}

export default Index;
