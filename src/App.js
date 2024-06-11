import React, { useState } from 'react';
import './App.css';
import Header from './mycomponents/Header'; 
import Footer from './mycomponents/Footer'; 
import Todos from './mycomponents/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done"
    },
    {
      sno: 3,
      title: "Go to the zoo",
      desc: "You need to go to the zoo to get this job done"
    }
  ]);

  const onDelete = (sno) => {
    console.log("I am onDelete", sno);
    setTodos(todos.filter((todo) => todo.sno !== sno));
  }

  return (
    <>
      <Header title="My To-Do List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
