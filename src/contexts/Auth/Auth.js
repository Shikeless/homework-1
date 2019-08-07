import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
    state = {
        authorizeError: ''
    }
    authorize = (email, password) => {
        const validData = { email: 'stu@dent.com', password: '123' }

        if (email === validData.email && password === validData.password) {
            this.props.returnAuthorizeStatus(email) 
        }
    }


  getProviderValue = () => {
    return {
      isAuthorized: this.props.isAuthorized,
      authorize: this.authorize,
      authorizeError: this.state.authorizeError
    }
  }

  render() {
    console.log(this.props);
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
