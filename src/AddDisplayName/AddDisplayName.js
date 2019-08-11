import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (WrappedComponent) => {
    class Component extends React.Component {
      render () {
        return <WrappedComponent />
      }
    }
   
    if (WrappedComponent.displayName) { 
      Component.displayName = `HOC${getDisplayName(WrappedComponent)}`; 
    } else {
      Component.displayName = 'HOCComponent'
    } 

    function getDisplayName(WrappedComponent) {
      return WrappedComponent.displayName || WrappedComponent.name || WrappedComponent.displayName ;
    }
   
    return Component
}
