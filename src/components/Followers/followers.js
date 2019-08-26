import React from 'react';
import styles from './followers.module.css';
import cx from 'classnames';
import { getData, getIsLoading } from '../../modules/Followers';
import { connect } from 'react-redux';

class Followers extends React.Component {
  render() {
    const { data, isLoading } = this.props

    if(isLoading) return <div className={styles.root}>Загрузка информации...</div>
    if(!data) return <div className={styles.root}>Информация о подписчиках не найдена</div>
    
    return (
      <div className={cx(styles.root, 't-followers')}>
        {data.map(item =>(
          <div className={cx(styles.follower)} key={item.id}>
            <img className={cx(styles.followerImg)} src={item.avatar_url} alt={item.login} />
            <p className={cx(styles.followerLogin)}>{item.login}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(state => ({
  data: getData(state),
  isLoading: getIsLoading(state)
}))(Followers);
