import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home/Home';
import ClosetTable from './components/ClosetTable/ClosetTable';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ClosetTable} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
