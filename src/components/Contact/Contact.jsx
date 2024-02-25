import PropTypes from 'prop-types';
import { ContactContainer, ContactName, Button } from './Contact.styled.jsx'; 

const Contact = ({ id, name, number, onDelete }) => (
  <ContactContainer>
    <ContactName>{name}: {number}</ContactName>
    <Button onClick={() => onDelete(id)}>Delete</Button>
  </ContactContainer>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;