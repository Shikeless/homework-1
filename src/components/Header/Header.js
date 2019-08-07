import React, { PureComponent } from 'react';
import './Header.css';

class Header extends PureComponent {
  render() {
    console.log(this.props.isAuthorized)
    const { isAuthorized } = this.props.isAuthorized;
    const { userName } = this.props.userName;
    if ( { isAuthorized } === true ) {
      return <p>{ userName }</p>
    } else { 
      return <p>false</p>
    } 
 
    
  }
}

export default Header;
