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

  onChangeFilter = value => {
    this.setState({ filter: value });
  };

  addContact = params => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, params],
    }));
  };

  render() {
    return (
      <div className={css.appWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />

        <h2 className={css.titleContact}>Contacts</h2>
        <Filter onChangeFilter={this.onChangeFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
