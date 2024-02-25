import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { Title } from './App.styled.jsx';
import { AppStyled } from './App.styled.jsx';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const localContacts = localStorage.getItem('contacts');
    return localContacts ? JSON.parse(localContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (currentValue) => {
    const alreadyAdded = contacts.some(obj => obj.name === currentValue.name);
    if (alreadyAdded) {
      alert(`${currentValue.name} is already in contacts`);
    } else {
      const newContact = {
        name: currentValue.name,
        id: nanoid(),
        number: currentValue.number,
      };
      setContacts(prevContacts => [...prevContacts, newContact]);
    }
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <AppStyled>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} />
      <Title>Contacts</Title>
      <SearchBox
        value={filter}
        onChange={changeFilter}
      />
      <ContactList
        contacts={filteredContacts()}
        onDelete={deleteContact}
      />
    </AppStyled>
  );
};

export default App;