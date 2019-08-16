import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

class InboxList extends React.Component {
    render () {
        return (
            <MailList marker='inbox' mails={this.props.data.inbox}/>
        )
    }
}

export default withData(InboxList);