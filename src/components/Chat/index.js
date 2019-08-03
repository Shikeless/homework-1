import React from 'react';
import Message from '../Message'

class Chat extends React.Component {
    state = { messages: [], messageInput: "" };

    changeInputMessage = event => {
        this.setState({ messageInput: event.target.value});
    };

    sendMessageOnEnter = event => {
        if (event.key === 'Enter') {
            this.setState(
                {
                    messages: [...this.state.messages, {text: this.state.messageInput, id: this.state.messages.length+1}]
                },
                () => {
                    console.log(this.state.messages);
                }
            );
            this.setState(
                {
                    messageInput: ""
                },
                () => {
                    console.log(this.state.messageInput);
                }
            )
        }
    }

    render() {
      return (
            <div className="chat">
                <input className="input-message" value={this.state.messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} />
                <br/>
                <Message list={this.state.messages}/>
            </div>   
      );
    }
  }

export default Chat;