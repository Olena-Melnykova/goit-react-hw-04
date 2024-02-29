import { useState } from 'react'; 
import { Toaster } from 'react-hot-toast'; 
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import { AppStyled } from './App.styled.jsx';

const App = () => {
  const [search, setSearch] = useState(' ');

  const filterChanging = (searchValue) => {
    setSearch(searchValue.trim()); 
  };

  return (
    <AppStyled>
      <Toaster position="top-center" reverseOrder={false} />
      <SearchBar onSubmit={filterChanging} />
      <ImageGallery queryName={search} />
    </AppStyled>
  );
};

export default App;