import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors.js';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contact_container}>
      <h2 className={css.contacts_header}>Contacts</h2>
      <ul className={css.list_contacts}>
        {filterContacts.map(({ id, name, number }) => {
          return (
            <li className={css.contacts_list_item} key={id}>
              <p className={css.contact_paragraph}>{name}</p>
              <p className={css.contact_paragraph}>{number}</p>
              <button
                className={css.delete_button}
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
