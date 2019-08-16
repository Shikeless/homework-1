import React from 'react';
import { withData } from '../../context/Data';
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
        const { marker, mails, match } = this.props   
        return (
            <div className={cx(classes.container)}>
                {mails.map(mail => (
                    <MailListElement key={mail.id} className={cx(classes.link)} to={`/app/${marker}/${mail.id}`}>{mail.body}</MailListElement>
                ))}
            </div>
            
        )
    }
}

export default MailList;

