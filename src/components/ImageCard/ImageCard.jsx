import PropTypes from 'prop-types';
import { ImageGalleryItemImg, ImageGalleryItemStyled } from './ImageCard.styled';

const ImageCard = ({ image, onClick }) => {
  const { webformatURL, description } = image;
  return (
    <ImageGalleryItemStyled onClick={onClick}>
      <ImageGalleryItemImg src={webformatURL} alt={description} />
    </ImageGalleryItemStyled>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;