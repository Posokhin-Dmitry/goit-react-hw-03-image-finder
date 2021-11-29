import React, { Component } from 'react';
import * as api from './Servises/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    page: 1,
    dataImages: [],
    largeImage: {},
    maxPerPage: 12,
    query: '',
    isLoading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const prevQuery = prevState.query;
    const newPage = this.state.page;
    const newQuery = this.state.query;
    const maxPerPage = this.state.maxPerPage;

    if (prevQuery !== newQuery || prevPage !== newPage) {
      this.searchQuery(newPage, newQuery, maxPerPage);
    }

    if (newPage > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  searchQuery = (page, query, maxPerPage) => {
    this.setState({ isLoading: true });
    api
      .searchQuery(page, query, maxPerPage)
      .then(({ data }) => {
        this.setState({ dataImages: [...this.state.dataImages, ...data.hits] });
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleFormSubmit = query => {
    this.setState({ dataImages: [], page: 1 });
    this.setState({ query });
  };

  handleClickLoadMore = () => {
    let { page } = this.state;
    page += 1;
    this.setState({ page });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleClickImg = largeImage => {
    this.setState({ largeImage });
    this.toggleModal();
  };

  render() {
    const { dataImages, isLoading, showModal, largeImage, query } = this.state;
    const {
      handleFormSubmit,
      handleClickImg,
      handleClickLoadMore,
      toggleModal,
    } = this;
    return (
      <div className="App">
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery dataImages={dataImages} onClickImg={handleClickImg} />
        {isLoading && <Loader />}
        {dataImages.length > 11 && <Button onClick={handleClickLoadMore} />}
        {showModal && <Modal img={largeImage} onClose={toggleModal} />}
      </div>
    );
  }
}

export default App;
