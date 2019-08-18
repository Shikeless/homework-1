import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.

  renderRoute = routeProps => {
    const { isAuthorized, component: RouteComponent } = this.props;
      return (isAuthorized === true ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to="/" />
      )
    )
  };

  render() {
    const { component, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
  }
}

export default withAuth(PrivateRoute);
