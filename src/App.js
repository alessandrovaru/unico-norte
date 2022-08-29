import './App.scss';

import Header from './components/header/Header'
import MainCarrousel from './components/main-carrousel/MainCarrousel';

function App() {
// const [logo, setLogo] = useState([]);
// const [titles, setTitles] = useState([]);
// const [error, setError] = useState([]);

// useEffect(() => {

//   fetch('http://localhost:3000/')
//     .then(async response => {
//         const isJson = response.headers.get('content-type')?.includes('application/json');
//         const data = isJson && await response.json();
//         // check for error response
//         if (!response.ok) {
//             // get error message from body or default to response status
//             const err = (data && data.message) || response.status;
//             setError(err)
//             console.log(error)
//             return Promise.reject(err);
//         }
//         setLogo(data)
//     })
//     .catch(error => {
//         console.error('There was an error!', error);
//     });
//   return () => {
//   };
// }, [error]);

  return (
    <div className="App">
      <Header />
      <MainCarrousel />
    </div>
  );
}

export default App;
