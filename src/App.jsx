import { Component } from "react";
import { nanoid } from 'nanoid'
import Form from "./components/Form/Form";
import ContactList from "./components/ContactList/ContactList";
import Section from './components/Section/Section'; 
import Filter from './components/Filter/Filter';
import {AppStyled} from './App.styled';

export default class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (currentValue) => {
    const alreadyAdded = this.state.contacts.some(
      obj => obj.name === currentValue.name);
    alreadyAdded ?
      alert(`${currentValue.name} is already in contacts`)
    :
      this.setState(prevState => {
        const newContact = {
          name: currentValue.name, 
          id: nanoid(),
          number: currentValue.number,
        }
        return (
        {contacts: [...prevState.contacts, newContact]}
      )})
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  changeFilter = (event) => {
    this.setState({filter: event.target.value});
  }

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const filtredContacts = this.filtredContacts();
    return (
      <AppStyled>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact}/>
        </Section>
        <Section title="Contacts">
          <Filter
              value={this.state.filter}
              onChange={this.changeFilter}
          />
          <ContactList 
              contacts={filtredContacts}
              onDelete={this.deleteContact}
          />
        </Section>
      </AppStyled>
    );
  }
}
