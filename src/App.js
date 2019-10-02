import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const APP_ID = "002dae7b";
  const APP_KEY = "7512c38d7240954f3c473dffe2332602";

const exampleReq = 'https://api.edamam.com/search?q=chicken&app_id=${002dae}&app_key=${7512c38d7240954f3c473dffe2332602}'
 
const [counter, setCounter] = useState(0);

 useEffect(() => {
  console.log("Effect has been run");
 });
 
 
 
  return (
    <div className = "App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 onClick ={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
