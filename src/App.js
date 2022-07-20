import React from 'react';
import Navbar from './components/Navbar'
import './asset/css/App.css';
import WeatherPanel from './components/WeatherPanel'
import Anuncio from './components/Anuncio';


function App() {
   
  return (
    <div className="App">
      <Navbar />

      <WeatherPanel />
      <Anuncio />
    </div>
  );
}


export default App;
