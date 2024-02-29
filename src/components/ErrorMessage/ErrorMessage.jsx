import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => {
    return (
        <div>
            <p>Error: {message}</p>
        </div>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;