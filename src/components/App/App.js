import React, { PureComponent } from 'react';
import Layout from '../Layout';
import Footer from '../Footer';
import Header from '../Header';
import LoginForm from '../LoginForm';
import Congratulations from '../Congratulations';
import { AuthProvider, AuthConsumer } from '../../contexts/Auth';

class App extends PureComponent {
  state = {
    isAuthorized: false,
    userName: ''
  }

  returnAuthorizeStatus = (name) => {
      this.setState({ 
        isAuthorized: !this.state.isAuthorized,
        userName: name
      })
  }

  render() {
    return (
      <AuthProvider isAuthorised={this.state.isAuthorized} returnAuthorizeStatus={this.returnAuthorizeStatus}>
        <Layout header={Header} footer={Footer} isAuthorized={this.state.isAuthorized} userName={this.state.userName}>
          <AuthConsumer >
            {({ isAuthorized, authorize, authorizeError}) =>
              isAuthorized ? (
                <Congratulations />
              ) : (
                <LoginForm
                  authorize={authorize}
                  authorizeError={authorizeError}
                />
              )
            }
          </AuthConsumer>
        </Layout>
      </AuthProvider>
    );
  }
}

export default App;
