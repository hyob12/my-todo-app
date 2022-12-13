import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
