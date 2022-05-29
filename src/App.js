import './App.css';
import React from 'react';
import Component from './components/Component';

export default function App() {
  return (
    <div className="main-page">
      <Component url={`${process.env.REACT_APP_DATA_URL}data`}/>
      <Component url={`${process.env.REACT_APP_DATA_URL}error`}/>
      <Component url={`${process.env.REACT_APP_DATA_URL}loading`}/>
    </div>
  );
}

