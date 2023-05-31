import React, { Component } from 'react';

export default class Filter extends Component {
  handleSearch = e => {
    const value = e.target.value;
    this.props.addFilter(value);
  };

  render() {
    return (
      <>
        <label>
          Find contacts by name
          <input type="text" name="filter" onChange={this.handleSearch} />
        </label>
      </>
    );
  }
}
