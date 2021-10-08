import React from 'react';
import { ImSearch } from 'react-icons/im';
import s from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    value: null,
  };

  handleChange = event => {
    this.setState({ value: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <input
            className={s.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images..."
            onChange={this.handleChange}
            value={this.state.value}
          />

          <button type="submit" className={s.button}>
            <ImSearch />
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
