import React from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

const OutboxMail = (props) => {
    const {
      match: {
        params: { id }
      },
      data
    } = props;
    const mail = data.outbox.find(mail => mail.id === id);

    return <Mail {...mail} />;
}


export default withData(OutboxMail);