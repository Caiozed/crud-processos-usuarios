import React from 'react';
import './App.css';
import axios from "axios";
import SideBar from './components/Sidebar';
import Routes from './components/Router';
import { BrowserRouter as Router } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar/>
        <div style={{marginLeft: 100}}>
        <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
