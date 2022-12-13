import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import './TodoInsert.css';

function TodoInsert({ onInsertToggle }) {
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form>
        <input></input>
        <button type="submit">
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
}

export default TodoInsert;
