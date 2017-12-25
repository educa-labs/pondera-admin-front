import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import is from 'is_js';
import { toggleSelection } from '../../redux/query';
import SearcInput from './SearchInput';
import UnivItem from './UnivItem';
import FilteredList from '../FilteredList';
import Card from '../../styled/Card';
import { Subtitle } from '../../styled/Text';

const updateFilter = state => ({
  value: state.value,
  filter: state.value,
});

const Scrollable = styled.div`
  height: 20rem;
  overflow: scroll;
`;


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
    if (univs === null) return <div>Loading ...</div>
    return (
      <Card>
        <SearcInput
          value={value}
          onChange={ev => this.setState({ value: ev.target.value })}
          afterTyping={() => this.setState(updateFilter)}
          time={300}
        />
        <Scrollable>
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
        </Scrollable>
      </Card>
    );
  }
}

export default connect(state => ({
  selections: state.query.selections,
  univs: state.univs.data,
}))(UniversityPanel);
