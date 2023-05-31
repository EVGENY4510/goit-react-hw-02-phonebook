import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // deleteIfSame = params => {
  //   this.state.contacts.map(contact => {
  //     if (contact.name === params) {
  //       alert(`${contact.name} is already in contact`);
  //       this.setState(prevState => ({
  //         contacts: prevState.contacts.filter(
  //           contact => contact.name !== params
  //         ),
  //       }));
  //     }
  //   });
  // };

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
      <li key={contact.idKey}>
        <p>
          {contact.name}:<span>{contact.number}</span>
        </p>
        <button type="button" onClick={() => this.deleteContact(contact.idKey)}>
          Delete
        </button>
      </li>
    ));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          deleteIfSame={this.deleteIfSame}
          contacts={this.state.contacts}
        />

        <h2>Contacts</h2>
        <Filter addFilter={this.addFilter} />
        <ContactList displaySearchResult={this.displaySearchResult} />
      </div>
    );
  }
}

export default App;
