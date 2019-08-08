import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render() {
    console.log(this.props)
    const { isAuthorized, email} = this.props;
    if (isAuthorized === false) return null;
    return (
      <div>      
        <p>{email}</p>
        <button className='button.t-logout' onClick={this.props.logout}>LOGOUT</button>
      </div>

    )

  }
}

export default Header;
