import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer >
        {({ isAuthorized, email, logout }) =>
          isAuthorized ? (
            <div>      
              <p>{email}</p>
              <button className='button.t-logout' onClick={logout}>LOGOUT</button>
            </div>
          ) : null }
      </AuthConsumer>
    )
  }
}

export default Header;
