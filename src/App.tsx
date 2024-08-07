import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import TODOHero from './components/TODOHero'
import Form from './components/Form'
import TODOList from './components/list/TODOList'

function App() {
  const [todos, setTodos] = useState<any>([]);

  // Retrieve data from localStorage when component mounts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed = todos.filter(
    (todo: any) => todo.is_completed == true
  ).length;
  const total_todos = todos.length;
  return (
    <>
      <div className="wrapper">
        <Header />
        <TODOHero todos_completed={todos_completed} total_todos={total_todos} />
        <Form todos={todos} setTodos={setTodos} />
        <TODOList todos={todos} setTodos={setTodos} />
      </div>
    </>
  )
}

export default App
