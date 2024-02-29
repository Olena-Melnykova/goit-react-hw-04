import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalStyled, ModalOverlay } from './ImageModal.styled.jsx';

const modalRoot = document.querySelector('#modal-root');

const ImageModal = ({ onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleOverlayClick = (e) => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return createPortal(
        <ModalOverlay onClick={handleOverlayClick}>
            <ModalStyled>{children}</ModalStyled>
        </ModalOverlay>,
        modalRoot
    );
};

ImageModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default ImageModal;