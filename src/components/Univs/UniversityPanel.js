import React, { Component } from 'react';
import { connect } from 'react-redux';
import is from 'is_js';
import { toggleSelection } from '../../redux/filters';
import SearcInput from './SearchInput';
import List from './List';


const univs = [
  { id: 1, title: 'PUC' },
  { id: 2, title: 'Universidad Central ' },
  { id: 3, title: 'Universidad Gabriela Mistral' },
]

class UniversityPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(id) {
    this.props.dispatch(toggleSelection(id))
  }
  
  render() {
    const { input } = this.state;
    const { selections } = this.props;
    return (
      <div className="panel">
        <p className="panel-heading">
          Universidades
        </p>
        <SearcInput
          value={this.state.input}
          onChange={(ev) => { this.setState({ input: ev.target.value }); }}
        />
        <List
          univs={univs}
          selections={selections}
          onItemClick={this.onItemClick}
        />
      </div>
    );
  }
}

export default connect(state => ({
  selections: state.filters
}))(UniversityPanel);
