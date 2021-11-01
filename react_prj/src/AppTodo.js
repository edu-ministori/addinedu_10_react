import React, { useState, useRef, useMemo } from 'react';
// import logo from './logo.svg';
import './App.css';

import TodoHeader from './todo/TodoHeader';
import TodoContents from './todo/TodoContents';
import TodoList from './todo/TodoList';
import TodoStatus from './todo/TodoStatus';
import TodoFooter from './todo/TodoFooter';

const countArray = (todoArray) => {
  return(
    todoArray.filter(todo => todo.checked === false).length
  );
}

function AppTodo() {

  const [todoArray, setTodoArray] = useState([
    {
      id : 1,
      checked : true,
      content : '할일 todo 1',
      hide : false
    },
    {
      id : 2,
      checked : false,
      content : '할일 todo 2',
      hide : false
    },
    {
      id : 3,
      checked : false,
      content : '할일 todo 3',
      hide : false
    }
  ]);

  const [inputText, setInputText] = useState({
    content : ''
  });

  const { content } = inputText;

  const nextIndex = useRef(4);

  const [number, setNumber] = useState(3);

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
      checked : false,
      content : content
    }

    setTodoArray([...todoArray, todo]);

    setInputText({
      content : ''
    });

    nextIndex.current++;

    setNumber(number + 1);
  }

  const removeContent = (id) => {
    setTodoArray(todoArray.filter(function(todo){
      return ( todo.id !== id )
    }));

    setNumber(number - 1);
  }

  const updateCheck = (id) => {
    setTodoArray(
      todoArray.map(
        (todo) => {
          return (todo.id === id ? {...todo, checked : !todo.checked} : todo);
        }
      )
    );
  }

  const item = {
    showAll : () => {
      setTodoArray(
        todoArray.map(
          (todo) => {
            return (todo = {...todo, hide : false});
          }
        )
      );
    },

    showUnChecked : () => {
      setTodoArray(
        todoArray.map(
          (todo) => {
            return (todo.checked === false ? {...todo, hide : false} : {...todo, hide : true});
          }
        )
      );
    },

    showChecked : () => {
      setTodoArray(
        todoArray.map(
          (todo) => {
            return (todo.checked === true ? {...todo, hide : false} : {...todo, hide : true});
          }
        )
      );
    },

    removeChecked : () => {
      setTodoArray(todoArray.filter(function(todo){
        return ( todo.checked === false )
      }));
    }
  }

  return (
    <>
      <TodoHeader createContent={createContent} updateContent={updateContent} content={content} />
      <TodoContents>
        <TodoList array={todoArray} removeContent={removeContent} updateCheck={updateCheck} />
        <TodoStatus number={number} item={item} />
      </TodoContents>
      <TodoFooter />
    </>
  );
}

export default AppTodo;
