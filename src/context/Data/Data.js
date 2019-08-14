import React, { Component } from 'react';
import data from './mailData';
const { Provider, Consumer: DataConsumer } = React.createContext('');

class DataProvider extends Component {
  getProviderValue = () => {
    return { data };
  };
  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const withData = WrappedComponent => {
  return class DataHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <DataConsumer>
          {({ data }) => <WrappedComponent {...rest} data={data} />}
        </DataConsumer>
      );
    }
  };
};

export { DataProvider, withData };
