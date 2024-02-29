import PropTypes from 'prop-types';
import { LoadMoreStyled } from './LoadMoreBtn.styled.jsx';

export const LoadMoreBtn = ({onLoad}) => {
    return (
        <LoadMoreStyled
            type = "button"
            onClick={onLoad}
        >
            LOAD MORE
        </LoadMoreStyled>
    )
} 

LoadMoreBtn.propTypes = {
    onLoad: PropTypes.func.isRequired,
};
