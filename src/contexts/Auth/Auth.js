import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');
const validData = { email: 'stu@dent.com', password: '123' }

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: ''
  }

  authorize = (login, password) => {
    if (login === validData.email && password === validData.password) {
      this.setState(({ isAuthorized, authorizeError, email  }) => ({
        isAuthorized: !isAuthorized, authorizeError: '', email: login, 
      }))
    } else { 
      this.setState ({
        authorizeError: 'Email или пароль введён не верно'
      })
    }
  }

  logout = () => {
    this.setState({
      isAuthorized: false
    })
  }


  getProviderValue = () => {
    const { isAuthorized, authorizeError, email } = this.state;
    return {
      isAuthorized,
      authorize: this.authorize,
      authorizeError,
      email,
      logout: this.logout
    }
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
