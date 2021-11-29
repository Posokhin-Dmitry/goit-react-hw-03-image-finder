import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlay = e => {
    const overlay = document.querySelector('.Overlay');
    if (e.target === overlay) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleOverlay}>
        <div className="Modal">
          <img src={this.props.img.largeImageURL} alt={this.props.img.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  img: PropTypes.object,
};

export default Modal;
