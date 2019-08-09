import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render() {
    const { isAuthorized, email} = this.props;
    return isAuthorized ? (
      <div>      
        <p>{email}</p>
        <button className='button.t-logout' onClick={this.props.logout}>LOGOUT</button>
      </div>
    ) : null
  }
}

export default Header;
