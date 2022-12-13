import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';

function App() {
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

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className="add-todo-button">
        <MdAddCircle />
      </div>
    </Template>
  );
}

export default App;
