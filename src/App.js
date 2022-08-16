import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello World</h1>
      </header>
      <button onClick={() => {
        fetch('http://localhost:3000/')
          .then(res => res.json())
          .then(data => console.log(data))
      }
      }>
        Click Me
      </button>
    </div>
  );
}

export default App;
