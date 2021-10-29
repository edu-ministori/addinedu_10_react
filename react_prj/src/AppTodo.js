import React from 'react';
// import logo from './logo.svg';
import './App.css';

import TodoHeader from './todo/TodoHeader';
import TodoContents from './todo/TodoContents';
import TodoList from './todo/TodoList';
import TodoItem from './todo/TodoItem';
import TodoStatus from './todo/TodoStatus';
import TodoFooter from './todo/TodoFooter';

function AppTodo() {

  const todoArray = [
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

  ];

  return (
    <>
      <TodoHeader />
      <TodoContents>
        <TodoList>
          <TodoItem />
        </TodoList>
        <TodoStatus />
      </TodoContents>
      <TodoFooter />
    </>
  );
}

export default AppTodo;
