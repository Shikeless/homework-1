import React from 'react'
import cx from 'classnames';
import classes from './Search.module.css';
import ShowPreview from '../ShowPreview'
import { connect } from 'react-redux'
import { searchRequest } from '../../actions/actions'
import { getShows, getIsLoading, getError } from '../../reducers/searchReducer'

// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

class Search extends React.Component {
    state = { searchShows:'' }

    handleChange = e => {
        this.setState({ searchShows: e.target.value })
    }
    
    handleSearch = () => {
        const { searchShows } = this.state
        const { searchRequest } = this.props
        if(searchShows) searchRequest(searchShows)
    }

    render() {
        const { searchShows } = this.state
        const { shows, isLoading, error } = this.props

        if (isLoading) return <p>Данные загружаются...</p>
        if (error) return <p>Произошла ошибка при загрузке</p>

        return (
            <React.Fragment>
                <div className={cx(classes.previewList)}>
                    <input
                        className={cx(classes.input)}
                        placeholder='Название Телешоу'
                        value={searchShows}
                        onChange={this.handleChange}
                    />
                    <div className={cx(classes.buttonWrapper)}>
                        <button
                            className={cx(classes.button)}
                            onClick={this.handleSearch}
                        >
                            Найти
                        </button>
                    </div>
                </div>
                <div className={cx(classes.searchPanel)}>
                    { shows && shows.map(show =>
                        <ShowPreview {...show} key={show.id}/>
                    )}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    shows: getShows(state), 
    isLoading: getIsLoading(state),
    error: getError(state)
  });

const mapDispatchToProps = { searchRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);