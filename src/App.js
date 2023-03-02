import React, { useState } from 'react'
import "./App.css";

const App = () => {
  const [todo, setTodo] =useState([
    {title : 'react를배워봅시다.'},
    {title : 'react를배워봅시다.'},
    {title : 'react를배워봅시다.'},
  ]);

  const [title,setTitle]= useState('');

  const addHandler = () => {
    const newTodo= {
      title
    };
    setTodo([...todo, newTodo]);
  };

  const titleChangeHandler =(e) => {
    setTitle(e.target.value)
};

  return (
    <>
      <div className='form'>
        <input value={title} 
        onChange={(event) =>{titleChangeHandler(event)}}/>
        <button onClick={addHandler}>추가하기</button>
      </div>
      <h1 className='title'>Todo List</h1>
      <div className='List'>
        {todo.map((item)=>{
          return (
            <div className="component-sytle">
              {item.title}</div>
          )
        })}
      </div>
    </>
  );
}


export default App;