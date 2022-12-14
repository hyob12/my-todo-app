import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import './TodoItem.css';

function TodoItem({ todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo }) {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? 'checked' : ''}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id, checked);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id, checked);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
