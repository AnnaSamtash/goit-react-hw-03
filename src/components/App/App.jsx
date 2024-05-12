import { useState, useEffect } from 'react';
import initialContacts from '../../contacts.json';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contactsList')) || initialContacts
  );
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts =
    contacts?.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().includes(inputValue.toLowerCase())
    ) || [];
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={inputValue} onFilter={setInputValue} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
