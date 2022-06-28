import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// 1. useReducer로 최적화해줌.
// 259.4ms -> 17.1ms 렌더링 시간이 감소
// 상태를 업데이트하는 로직을 컴포넌트 바깥에 둠.
// 기존 코드를 많이 고쳐야 한다는 단점.
// const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
// 두 번째 파라미터: 초기 상태, 세 번째 파라미터: 초기 상태를 만들어 주는 함수

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트로 일정 관리 앱 만들기',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: '알바 두 탕 뛰기',
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     text: '블록체인 노드를 활용한 이더스캔 개발',
  //     checked: false,
  //   },
  // ]);

  // const [todos, setTodos] = useState(createBulkTodos);

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  // 2. 함수형 업데이트로 최적화하는 방법

  // onRemove, onToggle, onInsert  모두 최적화를 위해 setTodos 안에 'todos =>' 를 넣어줌.
  // 259.4ms -> 26.2ms 렌더링 시간이 감소
  // 왜 렌더링 시간이 감소되었나? 함수가 계속 만들어지는 상황을 방지하기 때문.
  // 기존: setTodos 함수를 사용할 때 새로운 상태를 파라미터로 넣어줌.
  // 대신 상태 업데이트를 어떻게 할 지 정의해주는 업데이트 함수를 넣은 것임. ---> '함수형 업데이트'라고 함.

  // const onRemove = useCallback((id) => {
  //   setTodos((todos) => todos.filter((ele) => ele.id !== id));
  // }, []);

  // const onToggle = useCallback((id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     ),
  //   );
  // }, []);

  // const onInsert = useCallback((text) => {
  //   const nextTodo = {
  //     id: nextId.current,
  //     text,
  //     checked: false,
  //   };
  //   setTodos((todos) => [...todos, nextTodo]);
  //   nextId.current += 1;
  // }, []);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
