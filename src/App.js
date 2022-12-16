import './App.css';
import Template from './components/Template';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './components/TodoInsert';

// 커밋용 수정222
function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todolist')
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(!insertToggle);
  };

  const onInsertTodo = (text) => {
    if (text === '') return alert('할 일을 입력해주세요');
    else {
      const todo = {
        text,
        checked: false,
      };
      fetch('http://localhost:3001/todolist', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(todo),
      }).then(setTodos([...todos, todo]));
    }
  };

  const onCheckToggle = (id, checked) => {
    fetch(`http://localhost:3001/todolist/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ checked: checked }),
    }).then(setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))));
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    fetch(`http://localhost:3001/todolist/${id}`, {
      method: 'DELETE',
    }).then(setTodos((todos) => todos.filter((todo) => todo.id !== id)));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    fetch(`http://localhost:3001/todolist/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ text: text }),
    });
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo} />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert onInsertToggle={onInsertToggle} onInsertTodo={onInsertTodo} selectedTodo={selectedTodo} onRemove={onRemove} onUpdate={onUpdate} />
      )}
    </Template>
  );
}

export default App;
