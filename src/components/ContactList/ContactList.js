import React, { Component } from 'react';

export default class ContactList extends Component {
  render() {
    return <ul>{this.props.displaySearchResult()}</ul>;
  }
}
