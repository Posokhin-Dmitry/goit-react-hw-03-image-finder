import React, { Component } from 'react';
// import * as api from './Servises/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import Button from './components/Button/Button';

class App extends Component {
  state = {
    // page: 1,
    // dataImages: [],
    // maxPerPage: 12,
    query: '',
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevPage = prevState.page;
  //   const prevQuery = prevState.query;
  //   const newPage = this.state.page;
  //   const newQuery = this.state.query;
  //   const maxPerPage = this.state.maxPerPage;

  //   if (prevQuery !== newQuery) {
  //     this.setState({ page: 1, dataImages: [] });
  //     this.searchQuery1(newPage, newQuery, maxPerPage);
  //   }
  //   if (prevPage !== newPage) {
  //     this.searchQuery(newPage, newQuery, maxPerPage);
  //   }
  // }

  handleFormSubmit = query => {
    this.setState({ query });
  };

  // searchQuery1 = (page, query, maxPerPage) => {
  //   api.searchQuery(page, query, maxPerPage).then(({ data }) => {
  //     console.log(data.hits);
  //     console.log(this.state.dataImages);
  //     this.setState({ dataImages: [] });
  //     const newDataImages = [...data.hits];
  //     this.setState({ dataImages: newDataImages });
  //   });
  // };

  // searchQuery = (page, query, maxPerPage) => {
  //   api.searchQuery(page, query, maxPerPage).then(({ data }) => {
  //     console.log(data.hits);
  //     console.log(this.state.dataImages);
  //     const newDataImages = [...this.state.dataImages, ...data.hits];
  //     this.setState({ dataImages: newDataImages });
  //   });
  // };

  // handleClickLoadMore = () => {
  //   let { page } = this.state;
  //   page += 1;
  //   this.setState({ page });
  // };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} />
        {/* {this.state.dataImages.length > 11 && (
          <Button onClick={this.handleClickLoadMore} />
        )} */}
      </div>
    );
  }
}

export default App;
