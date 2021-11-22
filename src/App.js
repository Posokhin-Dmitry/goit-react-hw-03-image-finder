import React, { Component } from 'react';
import * as api from './Servises/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    page: 1,
    query: '',
    dataImages: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query) {
      this.searchQuery(page, query);
    }
  }

  handleFormSubmit = query => {
    this.setState({ query });
  };

  searchQuery = (page, query) => {
    api.searchQuery(page, query).then(({ data }) => {
      console.log(data.hits);
      const newDataImages = [...data.hits];
      this.setState({ dataImages: newDataImages });
    });
  };

  handleClickLoadMore = () => {
    let { page } = this.state;
    page += 1;
    this.setState({ page });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery dataImages={this.state.dataImages} />
        <Button onClick={this.handleClickLoadMore} />
      </div>
    );
  }
}

export default App;
