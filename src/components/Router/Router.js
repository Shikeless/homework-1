import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../Login'
import Search from '../Search'
import PrivateRoute from '../PrivateRoute'

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute path="/search" component={Search} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router