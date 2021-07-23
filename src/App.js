import React, { useEffect, useState } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Form from "./Form";
import FormPage from "./FormPage";
import Homepage from './Homepage'

const App = () => {

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Switch>
          <Route path='/'>
              <Homepage />
            </Route>
            <Route path ='/pizza'>
              <FormPage />
            </Route>
          </Switch>
        </div>
      </nav>
    
      
    </div>
  );
};
export default App;