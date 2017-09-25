import React, {Component} from 'react';


class SearchBar extends Component {
  handleChange = (event) => {
    console.log(event.target.value);
    this.props.handleChange(event.target.value);
  }
  render() {
    return (
      <input
        placeholder="Look for gif!"
        className="form-control"
        onChange={this.handleChange}
      />
    )
  }
};


export default SearchBar;
