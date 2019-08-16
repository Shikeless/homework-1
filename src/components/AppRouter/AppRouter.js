import React, { Component } from 'react';
import { Route, Redirect, withRouter, Switch, NavLink } from 'react-router-dom';
import cx from 'classnames';
import classes from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxList';
import OutboxMail from '../OutboxList';

class AppRouter extends Component {
    render() {
      console.log(this.props)
      return (
        <div className={cx(classes.wrapper)}>
            <div className={cx(classes.container)}>
                <nav className={cx(classes.nav)}>
                    <ul className={cx(classes.navList)}>
                        <li className={cx(classes.navElement)}><NavLink exact to='/app'>Home</NavLink></li>
                        <li className={cx(classes.navElement)}><NavLink exact to='/app/inbox'>Inbox</NavLink></li>
                        <li className={cx(classes.navElement)}><NavLink exact to='/app/outbox'>Outbox</NavLink></li>
                    </ul>
                </nav>
                <div className={cx(classes.content)}>
                  <Switch>
                    <Route exact path='/app' component={Home}></Route>
                    <Route exact path='/app/inbox' component={InboxList}></Route>
                    <Route exact path='/app/outbox' component={OutboxList}></Route>
                    <Route path='/app/inbox/:id' component={InboxMail}></Route>
                    <Route path='/app/outbox/:id' component={OutboxMail}></Route>
                    <Redirect to='/app'/>
                  </Switch>
                </div>
            </div>
        </div>
      )
    }
}


export default withRouter(AppRouter);
