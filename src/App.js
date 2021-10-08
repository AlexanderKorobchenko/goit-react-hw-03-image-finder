import React from 'react';
import Container from './Components/Container';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
// import ImageGalleryItem from './Components/ImageGalleryItem';
//import './App.css';

class App extends React.Component {
  state = {
    searchValue: null,
  };

  changeSearchValue = value => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.changeSearchValue} />
        <ImageGallery searchValue={this.state.searchValue} />
      </Container>
    );
  }
}

export default App;