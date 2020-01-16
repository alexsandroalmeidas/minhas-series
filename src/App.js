import React, { useState, useEffect } from 'react';
import Header from './Header';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const Home = () => {
  return <h1>Home</h1>;
}

const Generos = () => {
  return <h1>Generos</h1>;
}

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    Axios.get('/api').then(response => {
      setData(response.data);
    })
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/generos" component={Generos} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App;
