import React, { Component } from 'react';
import { isThisISOWeek } from 'date-fns';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = (param) => {
  function HOC(WrappedComponent) {
    class Component extends React.Component {
      render () {
        return <WrappedComponent {...param}/>
      }
    }
    return Component
  }
  return HOC
}
