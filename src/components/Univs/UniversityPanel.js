import React, { Component } from 'react';
import { connect } from 'react-redux';
import is from 'is_js';
import { toggleSelection } from '../../redux/query';
import SearcInput from './SearchInput';
import UnivItem from './UnivItem';
import FilteredList from '../FilteredList';

const updateFilter = state => ({
  value: state.value,
  filter: state.value,
});

class UniversityPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      filter: '',
    };
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(id) {
    this.props.dispatch(toggleSelection(id));
  }


  render() {
    const { value, filter } = this.state;
    const { selections, univs } = this.props;
    return (
      <div className="panel">
        <p className="panel-heading">
          Universidades
        </p>
        <SearcInput
          value={value}
          onChange={ev => this.setState({ value: ev.target.value })}
          afterTyping={() => this.setState(updateFilter)}
        />
        <FilteredList filter={filter}>
          {univs.map(univ => (
            <UnivItem
              key={univ.id}
              label={univ.title}
              selected={is.inArray(univ.id, selections)}
              onClick={() => this.onItemClick(univ.id)}
            />
          ))}
        </FilteredList>
      </div>
    );
  }
}

export default connect(state => ({
  selections: state.query.selections,
}))(UniversityPanel);
