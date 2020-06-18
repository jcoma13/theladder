import React from 'react';
import './App.css';
import Heading from './components/Heading';
import PlayerCard from './components/PlayerCard/PlayerCard';
import PlayerList from './components/PlayerList/PlayerList';

function App() {
  return (
    <div className="App">
      <Heading/>
      <PlayerList/>
    </div>
  );
}

export default App;
