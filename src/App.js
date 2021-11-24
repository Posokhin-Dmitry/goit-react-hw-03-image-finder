import React, { Component } from 'react';
import * as api from './Servises/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    page: 1,
    dataImages: [],
    maxPerPage: 12,
    query: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const prevQuery = prevState.query;
    const newPage = this.state.page;
    const newQuery = this.state.query;
    const maxPerPage = this.state.maxPerPage;

    if (prevQuery !== newQuery) {
      this.setState({ dataImages: [], page: 1 });
      this.searchQuery(newPage, newQuery, maxPerPage);
      console.log('query');
      console.log(this.state.dataImages);
    }
    if (prevPage !== newPage) {
      this.nextPage(newPage, newQuery, maxPerPage);
      console.log('page', this.state.page);
      console.log(this.state.dataImages);
    }
  }

  searchQuery = (page, query, maxPerPage) => {
    api.searchQuery(page, query, maxPerPage).then(({ data }) => {
      this.setState({ dataImages: [...data.hits] });
    });
  };

  nextPage = (page, query, maxPerPage) => {
    api.searchQuery(page, query, maxPerPage).then(({ data }) => {
      this.setState({ dataImages: [...this.state.dataImages, ...data.hits] });
    });
  };

  handleFormSubmit = query => {
    this.setState({ query });
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
        {this.state.dataImages.length > 11 && (
          <Button onClick={this.handleClickLoadMore} />
        )}
      </div>
    );
  }
}

export default App;
