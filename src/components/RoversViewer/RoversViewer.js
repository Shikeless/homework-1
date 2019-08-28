// Здесь вам нужно реализовать вью

// Подключите его к редакс роутеру
// Вам потребуются селекторы для получения выбранного сола
// и списка фотографий

// Так же вы будете диспатчить экшены CHANGE_SOL и FETCH_PHOTOS_REQUEST
// Эти экшены находятся в модуле ROVER PHOTOS
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SelectSol from '../SelectSol';
import RoverPhotos from '../RoverPhotos';
import { getSelectedSol, getPhotos } from '../../modules/RoverPhotos/RoverPhotos';
import { changeSol, fetchPhotosRequest} from '../../modules/RoverPhotos/actions';


class RoverViewer extends React.Component {
    render () {
        const { selectedSol, changeSol, fetchPhotosRequest, photos} = this.props
        return (
            <React.Fragment>
                <SelectSol selectedSol={selectedSol} changeSol={changeSol} fetchPhotosRequest={fetchPhotosRequest} photos={photos}/>
                <RoverPhotos photos={this.props.photos}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      selectedSol: getSelectedSol(state),
      photos: getPhotos(state)
    }
  }

export default connect(
    mapStateToProps,
    { changeSol, fetchPhotosRequest }
)(RoverViewer)