import PropTypes from 'prop-types';
import { ContactContainer, ContactName, Button } from './Contact.styled.jsx'; 

const Contact = ({ name, number, onDelete }) => (
  <ContactContainer>
    <ContactName>{name}: {number}</ContactName>
    <Button onClick={onDelete}>Delete</Button>
  </ContactContainer>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;