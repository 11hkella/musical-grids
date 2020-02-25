import React from 'react';
import './App.css';
import TransportComponent from './components/TransportComponent'
import Kick from './components/Kick'


function App() {
  return (
    <div className="App">
      <TransportComponent>
        <Kick />
      </TransportComponent>
    </div>
  );
}

export default App;
