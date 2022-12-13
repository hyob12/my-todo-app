import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
