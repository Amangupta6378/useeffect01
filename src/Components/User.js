// import logo from './logo.svg';
// import "./App.css";
import React, { useState, useEffect } from "react";
function User(props) {
  
  useEffect(() => {
    console.warn("useEffect called with data");
  },[props.data, props.count]);
  // useEffect(() => {
  //   alert("Count is" + count);
  // }, [count]);
  return (
    <div className="App">
      <h1>Count is {props.count}</h1>
      <h1>Data is {props.data}</h1>
      
    </div>
  );
}

export default User;
