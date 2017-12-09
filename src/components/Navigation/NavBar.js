import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFilterValue } from '../../redux/query';
import SearchBar from './SearchBar';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { value } = this.state;
    const { dispatch } = this.props;
    return (
      <nav className="">
        <div className="container is-fluid">
          <div className="columns">
            <div className="column">
              <a href="https://bulma.io">
                Pondera
              </a>
            </div>
            <div className="column is-6">
              <SearchBar
                onChange={(ev) => { this.setState({ value: ev.target.value }); }}
                value={value}
                afterTyping={() => dispatch(setFilterValue(value))}
              />
            </div>
            <div className="column">
              <a className="button is-primary">Exportar CSV</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(null)(Navbar);
