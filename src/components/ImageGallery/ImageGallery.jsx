import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryStyled } from './ImageGallery.styled';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryStyled>
      {images.map(image => (
        <ImageCard key={image.id} image={image} onClick={() => onImageClick(image)} />
      ))}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;