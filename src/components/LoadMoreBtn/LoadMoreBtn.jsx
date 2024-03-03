import PropTypes from 'prop-types';
import { LoadMoreStyled } from './LoadMoreBtn.styled.jsx';

const LoadMoreBtn = ({onLoad}) => {
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

export default LoadMoreBtn;