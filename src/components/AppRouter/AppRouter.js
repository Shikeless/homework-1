import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Search from '../Search'
import ShowPage from '../ShowPage'
import './AppRouter.css'

export default () => (
      <BrowserRouter>
        <Switch>
          <Route exac path='/search' component={Search}/>
          <Route path='/shows/:id' component={ShowPage} />
          <Redirect to='/search' />
        </Switch>
      </BrowserRouter>
);