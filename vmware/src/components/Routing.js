
import React from 'react';
import {BrowserRouter as  Switch, Route, Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import Add from '../components/App';
import View from '../components/View';

function routers() {
  return (
      <BrowserRouter>
            <div>
                <Route exact path="/" component={View}/>
                <Route path="/add" component={Add}/>
                </div>
        </BrowserRouter>   
  );
}

export default routers;