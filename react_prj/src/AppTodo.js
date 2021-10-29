import React, { useState, useRef } from 'react';
// import logo from './logo.svg';
import './App.css';

import TodoHeader from './todo/TodoHeader';
import TodoContents from './todo/TodoContents';
import TodoList from './todo/TodoList';
import TodoStatus from './todo/TodoStatus';
import TodoFooter from './todo/TodoFooter';

function AppTodo() {

  const [todoArray, setTodoArray] = useState([
    {
      id : 1,
      content : '할일 todo 1'
    },
    {
      id : 2,
      content : '할일 todo 2'
    },
    {
      id : 3,
      content : '할일 todo 3'
    }
  ]);

  const [inputText, setInputText] = useState({
    content : ''
  });

  const { content } = inputText;

  const nextIndex = useRef(4);

  const updateContent = (event) => {
    const {name, value} = event.target;

    setInputText({
      ...inputText,
      [name] : value
    });
  }

  const createContent = () => {
    const todo = {
      id : nextIndex.current,
      content : content
    }

    setTodoArray([...todoArray, todo]);

    setInputText({
      content : ''
    });

    nextIndex.current++;
  }

  const removeContent = (id) => {

    setTodoArray(todoArray.filter(function(todo){
      return ( todo.id !== id )
    }));

  }
  
  return (
    <>
      <TodoHeader createContent={createContent} updateContent={updateContent} content={content} />
      <TodoContents>
        <TodoList array={todoArray} removeContent={removeContent} />
        <TodoStatus />
      </TodoContents>
      <TodoFooter />
    </>
  );
}

export default AppTodo;
