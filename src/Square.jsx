import { useState } from "react";

export default function Square() {
  const [value, setValue] = useState(null);

  function clickHandler() {
    setValue("X");
  }

  return (
    <button className="square" onClick={clickHandler}>
      {value}
    </button>
  );
}
