
import PropTypes from 'prop-types';
import Contact from '/src/components/Contact/Contact'; 

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      {contacts.map(({ name, number, id }) => (
        <Contact 
          key={id}
          name={name}
          number={number}
          onDelete={() => onDelete(id)} 
        />
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;