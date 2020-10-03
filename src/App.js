import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {

    const fetchTodos = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await resp.json();
      setTodos(json)
    }

    fetchTodos();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ol className="todos">
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
        </ol>
      </header>
    </div>
  );
}

export default App;
