import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../../Servises/api';
import Button from '../Button/Button';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {
    page: 1,
    dataImages: [],
    maxPerPage: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevPage = prevState.page;
    const prevQuery = prevProps.query;
    const newPage = this.state.page;
    const newQuery = this.props.query;
    const maxPerPage = this.state.maxPerPage;

    if (prevQuery !== newQuery) {
      this.setState({ dataImages: [], page: 1 });
      api.searchQuery(newPage, newQuery, maxPerPage).then(({ data }) => {
        this.setState({ dataImages: [...data.hits] });
        console.log(data);
        console.log(this.state.dataImages);
        console.log('query');
      });
    }
    if (prevPage !== newPage) {
      api.searchQuery(newPage, newQuery, maxPerPage).then(({ data }) => {
        this.setState({ dataImages: [...prevState.dataImages, ...data.hits] });
        console.log(this.state.dataImages);
        console.log('page', this.state.page);
      });
    }
  }

  handleClickLoadMore = () => {
    let { page } = this.state;
    page += 1;
    this.setState({ page });
  };

  render() {
    const { dataImages } = this.state;
    return (
      <>
        <ul className="ImageGallery">
          {dataImages.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            />
          ))}
        </ul>
        {this.state.dataImages.length > 11 && (
          <Button onClick={this.handleClickLoadMore} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  dataImages: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
