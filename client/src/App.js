import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import './styles.scss';

import { PrivateRoute } from '../src/components/privateRoute'
import Login from './components/Login'
import BubblePage from './components/BubblePage'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />

        <PrivateRoute exact path='/bubble-page' component={BubblePage}/>
        

      


    </div>
      </Router>
  );
}

export default App;