import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import TodoHeader from './todo/TodoHeader';
import TodoContents from './todo/TodoContents';
import TodoList from './todo/TodoList';
import TodoItem from './todo/TodoItem';
import TodoStatus from './todo/TodoStatus';
import TodoFooter from './todo/TodoFooter';

function App() {
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

export default App;
