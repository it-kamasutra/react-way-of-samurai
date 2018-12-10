import React, { Component } from 'react';
import './App.css';


const App = () => {
  return (
  <div>
      <Header />
      <Technologies />
  </div>);  
}

const Technologies = () => {
  return (
    <div>
        <ul>
          <li>css</li>
          <li>html</li>
          <li>js</li>
          <li>react</li>
        </ul>
      </div>
  );
}

const Header = () => {
  return (<div>
          <a href='#s'>Home</a>
          <a href='#s'>News Feed</a> 
          <a href='#s'>Messages</a>
        </div>);
}


export default App;