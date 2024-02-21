import PropTypes from 'prop-types';
import { Contact, Button } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(({ name, number, id }) => (
        <Contact key={id}>
          <span>
            {name}: {number}
          </span>
          <Button
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </Contact>
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;