import React from 'react';
import Navbar from './components/Navbar'
import './asset/css/App.css';
import WeatherPanel from './components/WeatherPanel'



function App() {
   
  return (
    <div className="App">
      <Navbar />
      <WeatherPanel />
    </div>
  );
}


export default App;
