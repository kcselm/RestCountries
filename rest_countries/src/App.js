import React from 'react';
import './App.css';
import Search from './components/Search'
import Countries from './components/Countries'  
import { Provider } from './context'

function App() {
  return (
    <Provider>
      <div className="container">
        <h1>Rest Countries</h1>
        <Search />
        <Countries />
      </div>
    </Provider>
  );
}

export default App;
