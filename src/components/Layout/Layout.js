import React, { PureComponent } from 'react';
import './Layout.css';
import SectionTitle from '../SectionTitle';

class Layout extends PureComponent {
  
  renderHeader(HeaderChild) {
    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
          <HeaderChild isAuthorized={this.props.isAuthorized} userName={this.props.userName}/>
        </div>
      </header>
    );
  }

  renderFooter(FooterChild) {
    return (
      <header className="footer">
      <SectionTitle className="header__title">footer</SectionTitle>
      <div className="footer__content">
          <FooterChild />
      </div>
      </header>
    );
  }

  render() {
    const { children } = this.props;
    console.log(this.props);
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
