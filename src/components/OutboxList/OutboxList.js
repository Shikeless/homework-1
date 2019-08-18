import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

const OutboxList = (props) => {
    return (
        <MailList marker='outbox' mails={props.data.outbox}/>
    )
}

export default withData(OutboxList);