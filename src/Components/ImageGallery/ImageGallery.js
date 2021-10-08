import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import RequestAPI from '../../services/apiService';
import s from './ImageGallery.module.css';

const newRequestAPI = new RequestAPI();

class ImageGallery extends React.Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchValue;
    const nextName = this.props.searchValue;

    if (prevName !== nextName) {
      //    this.setState({ status: Status.PENDING });
      newRequestAPI.value = nextName;
      newRequestAPI.getData().then(result => {
        console.log(result.hits);
        this.setState({ images: result.hits });
      });
    }
  }

  render() {
    return (
      <ul className={s.gallery}>
        <ImageGalleryItem array={this.state.images} />
      </ul>
    );
  }
}

export default ImageGallery;
