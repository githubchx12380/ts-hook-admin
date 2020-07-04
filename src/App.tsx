import React from 'react';
import './style/index.scss'
import Layout from './Layout'
import { HashRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout /> {/* 路由跳转 */}
      </HashRouter>
    </div>
  );
}

export default App;
