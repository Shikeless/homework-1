import React from 'react';

class Message extends React.Component {
    render() {
      return <div> {this.props.list.map(mess => <p key={mess.id}>{mess.text}</p>)} </div>
    }
  }

export default Message;