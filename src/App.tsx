import React from 'react';
import './style/index.scss'
import Layout from './Layout'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/Layout" component={Layout}></Route>
        <Route exact path="/login" component={Login}></Route>
      </HashRouter>
    </div>
  );
}

export default App;
