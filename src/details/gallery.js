import React, { Component } from 'react';
import { Loading } from '../components/loading';
import { connect } from 'react-redux';
import { fetchGallery } from '../redux/actionCreators';
import './gallery.css';

const mapStateToProps = state => {
    return {
        photos: state.gallery
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    fetchGallery: (animalName) => {dispatch(fetchGallery(animalName))}
  });

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchGallery(this.props.name);
  }

  render() {
    if (this.props.photos.isLoading) {
      return (
        <div className="row">
          <Loading></Loading>
        </div>
      );
    }
    else if (this.props.photos.errMess){
      return (
        <div className="row">
          <p className="text-danger">{this.props.errMess}</p>
        </div>
      );
    }
    else if (this.props.photos.photos.length > 0){
      return (
        <div className="row">
        {
          this.props.photos.photos.map((photo) => {
            return (
              <div key={photo.id} className="col-sm-4">
				<img src={photo.url} alt={photo.title} className="img-gallery"
					 height={300} width={300} />  
                <p>{photo.title}</p>                          
              </div>
            );
          })
        }
        </div>
      );
    }
    else{
        return null;
    }     
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Gallery);
