import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: ''
  }

  authorize = (login, password) => {
    const validData = { email: 'stu@dent.com', password: '123' }
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
    return {
      isAuthorized: this.state.isAuthorized,
      authorize: this.authorize,
      authorizeError: this.state.authorizeError,
      email: this.state.email,
      logout: this.logout
    }
  }

  render() {
    console.log(this.state)
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
