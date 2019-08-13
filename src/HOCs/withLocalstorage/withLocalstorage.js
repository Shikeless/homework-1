import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (WrappedComponent) => {
    const savedData = () => {
        let data = {}
        let keys = Object.keys(localStorage)
        
        for (let key of keys ) {
            data[key] = load(key)
        }
        return data;
    } 

    return class extends React.Component {
        render () {
          return <WrappedComponent load={load} save={save} savedData={savedData}/>
        }
    }
};

export default withLocalstorage;
