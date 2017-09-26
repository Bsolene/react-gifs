import React, {Component} from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.state.term !== nextState.term;
  }

  handleChange = (event) => {
    this.setState({ term: event.target.value});
    this.props.handleChange(this.state.term);
    // this.props.handleChange(event.target.value);
  }
  render() {
    return (
      <input
        value={this.state.term}
        placeholder="Look for gif!"
        className="form-control"
        onChange={this.handleChange}
      />
    )
  }
};


export default SearchBar;
