import './css/App.scss';
//import useState from 'react';
import { useState, useEffect } from 'react';

function App() {
const [logo, setLogo] = useState([]);
const [titles, setTitles] = useState([]);

useEffect(() => {
   let cleanup = false;
  fetch('http://localhost:3000/')
          .then(res => res.json())
          .then(data => setLogo(data))
  return () => {
    cleanup = true;
  };
}, []);

  return (
    <div className="App">
      <header>
        <h1>Lenguajio</h1>
      </header>
      <button onClick={() => {
        fetch('http://localhost:3000/list')
          .then(res => res.json())
          .then(data => setTitles(data))
      }
      }>
        Click Me
      </button>
      {logo.map(logo => (
        <div className='img_container'>
          <img src={logo} alt={logo} />
        </div>
      ))}
      {titles.map(title => (
        <div className='img_container'>
          <img src={title} alt={title} />
        </div>
      ))}
    </div>
  );
}

export default App;
