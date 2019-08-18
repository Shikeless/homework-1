import React from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

const InboxMail = (props) => {
    const {
      match: {
        params: { id }
      },
      data
    } = props;
    const mail = data.inbox.find(mail => mail.id === id);

    return <Mail {...mail} />;
}

export default withData(InboxMail);
