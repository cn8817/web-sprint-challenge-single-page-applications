import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import FormPage from "./FormPage";
import Homepage from './Homepage'
import {BrowserRouter as Router} from 'react-router-dom'

const App = () => {

  return (
    <Router>
    <div>
      <nav>
        <h1>Lambda Eats</h1>
          <Link to ='/'>Home</Link>
          <Link to ='/pizza'></Link>
          </nav>

          <Switch>
          <Route path ='/pizza'>
              <FormPage />
            </Route>
          <Route path='/'>
              <Homepage />
            </Route>
          </Switch>
        </div>
    </Router>
  );
};
export default App;