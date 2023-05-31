import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './app.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = params => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.idKey !== params),
    }));
  };

  addFilter = value => {
    this.setState({ filter: value });
  };

  addContact = params => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, params],
    }));
  };
  displaySearchResult = () => {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact => {
      const searchResultLower = filter.toLowerCase();
      const contactLower = contact.name.toLowerCase();
      return contactLower.includes(searchResultLower);
    });
    return filteredContacts.map(contact => (
      <li key={contact.idKey} className={css.item}>
        <p className={css.contact}>
          - {contact.name} :<span className={css.span}>{contact.number}</span>
        </p>
        <button
          className={css.deleteButton}
          type="button"
          onClick={() => this.deleteContact(contact.idKey)}
        >
          Delete
        </button>
      </li>
    ));
  };

  render() {
    return (
      <div className={css.appWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          deleteIfSame={this.deleteIfSame}
          contacts={this.state.contacts}
        />

        <h2 className={css.titleContact}>Contacts</h2>
        <Filter addFilter={this.addFilter} />
        <ContactList displaySearchResult={this.displaySearchResult} />
      </div>
    );
  }
}

export default App;
