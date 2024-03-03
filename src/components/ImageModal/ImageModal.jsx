import { useState, useEffect, useCallback } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ onClose, image }) => {
  const [modalIsOpen, setIsOpen] = useState(true);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    onClose();
  }, [onClose]); 

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <button onClick={closeModal}>X</button>
      {image && <img src={image.largeImageURL} alt={image.description} />}
    </Modal>
  );
};

ImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

export default ImageModal;
