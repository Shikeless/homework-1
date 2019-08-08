import React, { PureComponent } from 'react';
import './Layout.css';
import SectionTitle from '../SectionTitle';
import { AuthProvider, AuthConsumer } from '../../contexts/Auth'

class Layout extends PureComponent {
  
  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
        <AuthConsumer >
            {({ isAuthorized, email, logout }) =>
              <HeaderChild isAuthorized={isAuthorized} email={email} logout={logout}/>
            }
          </AuthConsumer>
        </div>
      </header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <header className="footer">
      <SectionTitle className="header__title">footer</SectionTitle>
      <div className="footer__content">
      <AuthConsumer >
            {({ isAuthorized, email, logout }) =>
              <FooterChild isAuthorized={isAuthorized}/>
            }
          </AuthConsumer>
          
      </div>
      </header>
    );
  }

  render() {
    const { children } = this.props;

    return (
        <div>
          <React.Fragment>
          {this.renderHeader(this.props.header)}
          { children }
          {this.renderFooter(this.props.footer)}
          </React.Fragment>
        </div>
    )
  }
}

export default Layout;
