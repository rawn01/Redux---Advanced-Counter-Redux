import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { islogged, increment, decrement } from "../actions/action";

function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const loginOrLogout = () => {
    dispatch(islogged());
  };

  const inc = () => {
    dispatch(increment());
  }

  const dec = () => {
    dispatch(decrement());
  }

  return (
    <div id='main'>
      <button onClick={loginOrLogout}>{store.islogged === false ? "Login" : "Logout"}</button>
      {
        store.islogged === false ? undefined :
        <div>
          <h3 data-testid="counter">{store.counter}</h3>
          <button onClick={inc} style={{marginRight: 10+"px"}}>+</button>
          <button onClick={dec}>-</button>
        </div>
      }
    </div>
  );
}

export default App;
