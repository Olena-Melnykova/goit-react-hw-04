import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImages } from '../services/Api';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import Loader from './Loader/Loader';
import ImageModal from './ImageModal/ImageModal';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { AppStyled } from './App.styled';
import { Toaster } from 'react-hot-toast'; 
import toast from 'react-hot-toast';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const fetchedImages = await getImages(searchQuery, currentPage);
        setImages(prev => currentPage === 1 ? fetchedImages : [...prev, ...fetchedImages]);
        setError(null);
      } catch (error) {
        setError(error.message);
        Notify.failure(error.message); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, currentPage]);

  const handleSearchSubmit = (query) => {
    if (!query) {
      toast.error("Please enter a text to search for image"); 
      return;
    }
    setSearchQuery(query);
    setCurrentPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
     <Toaster
  position="top-center"
  reverseOrder={false}
  toastOptions={{
    style: {
      background: "#363636",
      color: "#fff",
    },
  }}
/>
      <AppStyled>
        <SearchBar onSubmit={handleSearchSubmit} />
        {error && <ErrorMessage message={error} />}
        <ImageGallery images={images} onImageClick={openModal} />
        {images.length > 0 && !isLoading && (
          <LoadMoreBtn onLoad={loadMore} />
        )}
        {isLoading && <Loader />}
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={closeModal} />
        )}
      </AppStyled>
    </>
  );
};

export default App;