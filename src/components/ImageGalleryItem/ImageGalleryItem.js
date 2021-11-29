import PropTypes from 'prop-types';

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL, onClick }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => onClick({ largeImageURL, tags })}
    >
      <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
  werformatURL: PropTypes.string,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
