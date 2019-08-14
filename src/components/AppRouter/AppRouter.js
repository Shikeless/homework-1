import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect, Link } from 'react-router-dom';
import cx from 'classnames';
import classes from './AppRouter.module.css';
import Home from '../Home';
// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail
class AppRouter extends Component {
    render() {
      return (
        <div className={cx(classes.wrapper)}>
            <div className={cx(classes.container)}>
                <nav className={cx(classes.nav)}>
                    <ul className={cx(classes.navList)}>
                        <li className={cx(classes.navElement)}><Link to='/app'>Home</Link></li>
                        <li className={cx(classes.navElement)}><Link to='/inbox'>Inbox</Link></li>
                        <li className={cx(classes.navElement)}><Link to='/outbox'>Outbox</Link></li>
                    </ul>
                </nav>
                <div className={cx(classes.content)}>
                    <Route path='/app' exac component={Home}></Route>
                </div>
            </div>
        </div>
      )
    }
  }
// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
AppRouter = withAuth(AppRouter)

export default AppRouter;
