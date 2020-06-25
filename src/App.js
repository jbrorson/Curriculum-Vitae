import React from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

// const Appstyle = styled.h1`
// margin: auto; 
// display: flex; 
// justify-content: center;
// background: darkcyan;
// color: whitesmoke;
// `

function App() {
  return (
      <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
