import { useState } from 'react';
import PropTypes from 'prop-types';
import ImageModal from '../ImageModal/ImageModal.jsx';
import { ImageGalleryItemImg, ImageGalleryItemStyled } from './ImageCard.styled.jsx';

const ImageCard = ({ image }) => {
    const [isModalOpened, setIsModalOpened] = useState(false);

    const toggleModal = () => setIsModalOpened(!isModalOpened);

    const { webformatURL, largeImageURL,  description } = image;

    return (
        <ImageGalleryItemStyled>
            <ImageGalleryItemImg 
                src={webformatURL} 
                alt={description}
                onClick={toggleModal}
            />
            {isModalOpened && (
                <ImageModal onClose={toggleModal}>
                    <img
                        src={largeImageURL}
                        alt={description}
                    />
                </ImageModal>
            )}
        </ImageGalleryItemStyled>
    );
};

ImageCard.propTypes = {
    image: PropTypes.object.isRequired,
};

export default ImageCard;