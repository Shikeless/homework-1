import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    if (this.props.isAuthorized === true) return <p>LOGED IN</p>;
    return <p>LOGED OUT</p> 
  }
}

export default Footer;
