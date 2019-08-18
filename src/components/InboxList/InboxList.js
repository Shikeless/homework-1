import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

const InboxList = (props) => {
    return (
        <MailList marker='inbox' mails={props.data.inbox}/>
    )
}

export default withData(InboxList);