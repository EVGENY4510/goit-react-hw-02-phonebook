import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  // this.props.contacts.map(contact => {
  //       if (contact.name === name) {
  //         return alert(`${contact.name} is already in contact`);
  //       }
  //     });
  onSubmitForm = e => {
    e.preventDefault();
    const { name, number } = this.state;

    this.props.deleteIfSame(name);

    const newContact = {};
    newContact.name = name;
    newContact.idKey = nanoid();
    newContact.number = number;

    this.props.addContact(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmitForm}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
