import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {getUsers} from './redux/slices/users/index'
import CompX from './components/CompX';

function App() {




  return (
    <div className="App">
  

<CompX/>


    </div>
  );
}

export default App;
