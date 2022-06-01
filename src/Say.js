import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("입장 또는 퇴장 버튼을 눌러주세요");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요!");

  const [color, setColor] = useState("black");
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={() => setColor("red")}>빨</button>
      <button onClick={() => setColor("green")}>초</button>
      <button onClick={() => setColor("blue")}>파</button>
    </div>
  );
};

export default Say;
