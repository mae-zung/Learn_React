// 함수형 컴포넌트 버전

import React, { useState } from "react";

const EventPracticeFuncVer = () => {
  const [form, setForm] = useState({
    userName: "",
    message: "",
  });
  const { userName, message } = form;

  const handleChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const handleClick = () => {
    alert(userName + ":" + message);
    setForm({
      userName: "",
      message: "",
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습(ver.함수형 컴포넌트)</h1>
      <input
        type="text"
        name="userName"
        placeholder="사용자명"
        value={userName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력하세요"
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPracticeFuncVer;
