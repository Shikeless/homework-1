import React from 'react'
import cx from 'classnames';
import classes from './ShowPage.module.css';
import { connect } from 'react-redux'
import { showRequest } from '../../actions/actions'
import { getShows, getIsLoading} from '../../reducers/showReducer'

class ShowPage extends React.Component {
    componentDidMount() {
        const { showRequest, match } = this.props
        const id = match.params.id
        console.log(this.props)
        showRequest(id)
    }

    render() {
        const { shows, isLoading} = this.props
        if (isLoading) return <p>Данные загружаются...</p>

        return (
            <div>
                <p>{shows.name}</p>
                { shows.image && <img src={shows.image.medium} alt={shows.name} />}
                <div>
                    <p dangerouslySetInnerHTML={{ __html: shows.summary }}></p>
                </div>
                <div className={cx(classes.cast)}>
                    { shows.cast && shows.cast.map(item => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            { item.image && <img src={item.image.medium} alt={item.name} />}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    shows: getShows(state),
    isLoading: getIsLoading(state)
});

const mapDispatchToProps = { showRequest };
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage)