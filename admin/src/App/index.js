import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContainer } from '../containers';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
          // path="/theme"
          >
            <ThemeContainer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
