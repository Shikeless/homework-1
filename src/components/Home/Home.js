import React from 'react';
import cx from 'classnames';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={cx(classes.container)}>
            Приветствуем в почтовом клиенте!
        </div>
    )
}

export default Home;