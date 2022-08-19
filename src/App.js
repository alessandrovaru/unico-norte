import './App.css';
//import useState from 'react';
import { useState, useEffect } from 'react';

function App() {
const [titles, setTitles] = useState([]);

useEffect(() => {
  let cleanup = false;
  fetch('http://localhost:3000/')
          .then(res => res.json())
          .then(data => setTitles(data))
  return () => {
    cleanup = true;
  };
}, []);

  return (
    <div className="App">
      <header>
        <h1>Lenguajio</h1>
      </header>
      {titles.map(title => (
        <div className='img_container'>
          <img src={title} alt={title} />
        </div>
      ))}
    </div>
  );
}

export default App;
