import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <section>
      <div>
        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </section>
  );
};

export default App;
