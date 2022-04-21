import React from "react";
import Style from "./style.module.css";

interface SearchBoxProps {
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}

function Index({ handleSubmit }: SearchBoxProps) {
  return (
    <form onSubmit={handleSubmit}>
      <input className={Style.input} type="text" name="query" placeholder="Search Song.." autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
    </form>
  );
}

export default Index;
