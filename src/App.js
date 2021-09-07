import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList'
import Container from './components/Container';
import './App.scss';

export default function App() {

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        
        <ContactList />
      </Container>
    )
  }