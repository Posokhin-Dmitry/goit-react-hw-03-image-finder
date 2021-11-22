import PropTypes from 'prop-types';

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  werformatURL: PropTypes.string,
};

export default ImageGalleryItem;
