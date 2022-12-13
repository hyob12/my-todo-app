import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './components/TodoInsert';

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '할 일 1',
      checked: true,
    },
    {
      id: 2,
      text: '할 일 2',
      checked: false,
    },
    {
      id: 3,
      text: '할 일 3',
      checked: true,
    },
  ]);

  const onInsertToggle = () => {
    setInsertToggle(!insertToggle);
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle} />}
    </Template>
  );
}

export default App;
