// 클래스형 컴포넌트 버전!

import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  // 임의 메서드가 이벤트로 등록되어도 this가 컴포넌트 자신으로 제대로 가리키기 위해서는
  // 메서드를 this와 바인딩하는 작업이 필요하다. 만약 바인딩하지 않는 경우라면  this가 undefined를 가리키게 된다.
  // 현재 constructor 함수에서 함수를 바인딩하는 작업이 이루어지고 있다.
  // 만약 constructor를 사용하기 번거롭다면, 화살표 함수 형태로 메서드를 정의하면 된다.

  //   constructor(props) {
  //     super(props);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  handleChange = (e) => {
    // state에 input 값 담기
    this.setState({
      //객체 안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됨
      [e.target.name]: e.target.value,
    });

    // e는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
    // 비동기적으로 이벤트 객체를 참조할 때 => e.persist() 함수 호출
    // 인풋 값을 가져올 때 => e.target.value
    console.log(e);
  };

  handleClick = () => {
    alert(this.state.username + ":" + this.state.message);
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
