import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Link
} from 'react-router-dom';

function App() {
  return (
      <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/create">
            <Create/>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
    

  );
}

export default App;
