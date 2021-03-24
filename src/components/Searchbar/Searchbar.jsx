import PropTypes from 'prop-types';
import { Component } from 'react';
// import PropTypes from 'prop-types'

// import styles from './ContactFilter.module.css';
// const initialState = {
//   search: '',
// };
class Searchbar extends Component {
  // state = initialState;
  state = {
    search: '',
  };
  handleChangeSearch = e => {
    this.setState({ search: e.currentTarget.value });
    console.log(this.state.search);
  };
  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.resetForm();
  };
  resetForm = () => this.setState({ search: '' });

  render() {
    const { search } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            name="search"
            value={search}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeSearch}
          />
        </form>
      </header>
    );
  }
}

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Searchbar;
