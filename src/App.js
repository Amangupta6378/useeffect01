// import logo from './logo.svg';
import "./App.css";
import User from './Components/User'
import React, { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(10);
  // useEffect(() => {
  //   console.warn("useEffect called with data");
  // });
  // useEffect(() => {
  //   alert("Count is" + count);
  // }, [count]);
  return (
    <div className="App">
      <User count={count} data={data}/>
      
      <button onClick={() => setCount(count + 1)}>Updata Count</button>
      <button onClick={() => setData(data + 1)}>Update Data</button>
    </div>
  );
}

export default App;
