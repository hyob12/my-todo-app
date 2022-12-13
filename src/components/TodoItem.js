import React from 'react';

function TodoItem({ todo }) {
  const { text } = todo;
  return <div>{text}</div>;
}

export default TodoItem;
