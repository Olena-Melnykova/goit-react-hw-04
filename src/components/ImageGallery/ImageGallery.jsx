import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImages } from '../../services/Api';
import ImageCard from '../ImageCard/ImageCard.jsx';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn.jsx';
import { Loader } from '../Loader/Loader';
import { ImageGalleryStyled } from './ImageGallery.styled.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ImageGallery = ({ queryName }) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        if (queryName.trim() === "") {
            if (hasSearched) { 
                Notify.failure("Nothing to search");
            }
            return;
        }

        const fetchImages = async () => {
            try {
                setIsLoading(true);
                setHasSearched(true); 
                const response = await getImages(queryName, page);
                if (response.length === 0) {
                    Notify.failure("Nothing found");
                    setImages([]);
                } else {
                    setImages(prevImages => page === 1 ? response : [...prevImages, ...response]);
                }
                setError(null);
            } catch (error) {
                setError(error.message);
                Notify.failure(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchImages();
 }, [queryName, page, hasSearched]);

    const onLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <>
            {error ? (
                <ErrorMessage message={error} />
            ) : (
                <>
                    <ImageGalleryStyled>
                        {images.map(image => (
                            <ImageCard key={image.id} image={image} />
                        ))}
                    </ImageGalleryStyled>
                    {images.length !== 0 && !isLoading && (
                        <LoadMoreBtn onLoad={onLoadMore} />
                    )}
                    {isLoading && <Loader />}
                </>
            )}
        </>
    );
};

ImageGallery.propTypes = {
    queryName: PropTypes.string.isRequired,
};

export default ImageGallery;