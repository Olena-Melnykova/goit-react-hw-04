import { useState } from "react";
import PropTypes from "prop-types";
import toast from 'react-hot-toast';
import {
  SearchBarStyled,
  SearchForm,
  SearchButton,
  SearchInput,
  SearchFormLabel,
} from './SearchBar.styled.jsx';

const SearchBar = ({ onSubmit }) => {
    const [search, setSearch] = useState("");

    const handleChange = e => {
        setSearch(e.currentTarget.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const trimmedSearch = search.trim();
        if (!trimmedSearch) {
            toast.error("Please enter a text to search for image"); 
            return; 
        }
        onSubmit(trimmedSearch);
        setSearch("");
    };

    return (
        <SearchBarStyled>
            <SearchForm onSubmit={handleSubmit}>
                <SearchButton type="submit">
                    <SearchFormLabel>Search</SearchFormLabel>
                </SearchButton>
                <SearchInput
                    value={search}
                    onChange={handleChange}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SearchForm>
        </SearchBarStyled>
    );
};

SearchBar.propTypes = { 
    onSubmit: PropTypes.func.isRequired 
};

export default SearchBar;

