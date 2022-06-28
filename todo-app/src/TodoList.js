import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized';
import './TodoList.scss';
import React, { useCallback } from 'react';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
  // const rowRenderer = useCallback(
  //   ({ index, key, style }) => {
  //     const todo = todos[index];
  //     return (
  //       <TodoListItem
  //         todo={todo}
  //         key={key}
  //         onRemove={onRemove}
  //         onToggle={onToggle}
  //         style={style}
  //       />
  //     );
  //   },
  //   [onRemove, onToggle, todos],
  // );
  // return (
  //   <List
  //     className="TodoList"
  //     width={497}
  //     height={513}
  //     rowCount={todos.length}
  //     rwoHeight={57}
  //     rowRenderer={rowRenderer}
  //     list={todos}
  //     style={{ outline: 'none' }}
  //   />
  // );
};

export default React.memo(TodoList);
