import './App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import MusicalDetails from './MusicalDetails';
import Create from './Create';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const serverBase = "http://localhost:8000/musicals";

function App() {
  const [musicals, setMusicals] = useState();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/musicals/:id">
              <MusicalDetails musicals={musicals} setMusicals={setMusicals} serverBase={serverBase}/>
            </Route>
            <Route path="/create">
              <Create musicals={musicals} setMusicals={setMusicals} serverBase={serverBase}/>
            </Route>
            <Route path="/">
              <Home musicals={musicals} setMusicals={setMusicals} serverBase={serverBase}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
