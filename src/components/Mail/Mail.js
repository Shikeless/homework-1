import React from "react";
import cx from 'classnames';
import classes from './Mail.module.css';

const Mail = ({from, to, body}) => {
    return (
        <div className={cx(classes.container)}>
            {from && <p>From: <b>{from}</b></p>}
            {to && <p>To: <b>{to}</b></p>}
            <p>{body}</p>
        </div>
    )
};

export default Mail