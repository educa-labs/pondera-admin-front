import React, { Component } from 'react';
import { connect } from 'react-redux';
import is from 'is_js';
import { toggleSelection } from '../../redux/filters';
import SearcInput from './SearchInput';
import List from './List';


class UniversityPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      filteredUnivs: props.univs,
    };
    this.onItemClick = this.onItemClick.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  onItemClick(id) {
    this.props.dispatch(toggleSelection(id));
  }

  applyFilter() {
    const { value } = this.state;
    const { univs } = this.props;
    if (value.length > 2) {
      const filteredUnivs = univs.filter(uni => is.include(uni.title.toLowerCase(), value));
      this.setState({
        filteredUnivs,
      })
    } else {
      this.setState({
        filteredUnivs: [...univs],
      });
    }
  }

  render() {
    const { value, filteredUnivs } = this.state;
    const { selections } = this.props;
    return (
      <div className="panel">
        <p className="panel-heading">
          Universidades
        </p>
        <SearcInput
          value={value}
          onChange={ev => this.setState({ value: ev.target.value })}
          afterTyping={this.applyFilter}
          time={500}
        />
        <List
          univs={filteredUnivs}
          selections={selections}
          onItemClick={this.onItemClick}
        />
      </div>
    );
  }
}

export default connect(state => ({
  selections: state.filters,
}))(UniversityPanel);
