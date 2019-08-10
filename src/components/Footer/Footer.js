import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer >
        {({ isAuthorized }) =>
          isAuthorized ? <p>LOGED IN</p> : <p>LOGED OUT</p>
        }
      </AuthConsumer>
    )
  }
}

export default Footer;
