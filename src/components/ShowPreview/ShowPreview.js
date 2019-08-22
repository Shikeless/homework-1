import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames';
import classes from './ShowPreview.module.css';

export default class ShowPreview extends React.Component {
    render() {
        const { image, name, id, summary } = this.props

        return (
            <div className={cx(classes.container)}>
                <div>
                    <Link to={`/shows/${id}`}>{name}</Link>
                    { image && <img src={image.medium} alt={name} />}
                </div>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: summary }}></p>
                </div>
            </div>
        )
    }
}