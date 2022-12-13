import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { useState } from 'react';

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
    <Template>
      <TodoList todos={todos} />
    </Template>
  );
}

export default App;
