import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import classes from './MailList.module.css';

const MailListElement = (props) => {
    return (
        <Link className={cx(classes.link)} {...props}></Link>
    )
};

class MailList extends React.Component {
    render () {
        const { marker, mails } = this.props  
        return (
            <div className={cx(classes.container)}>
                {mails.map(mail => (
                    <MailListElement key={mail.id} to={`/app/${marker}/${mail.id}`}>{`${mail.body.slice(0, 50)}...`}</MailListElement>
                ))}
            </div>
            
        )
    }
}

export default MailList;

