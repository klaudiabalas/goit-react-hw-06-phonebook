import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      const json = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(json);

      if (parsedContacts) {
        setContacts(parsedContacts);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const lowerCaseName = newContact.name.toLowerCase().trim();
    const exists = contacts.some(
      contact => contact.name.toLowerCase().trim() === lowerCaseName
    );

    if (exists) {
      alert(`${newContact.name} jest już w kontaktach!`);
    } else {
      setContacts([...contacts, newContact]);
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const addFilter = event => {
    setFilter(event.currentTarget.value);
  };

  return (
    <section>
      <div>
        <ContactForm addContact={addContact} />
        <ContactList contacts={filteredContacts} deleteContact={deleteContact}>
          <Filter filter={filter} addFilter={addFilter} />
        </ContactList>
      </div>
    </section>
  );
};

export default App;
