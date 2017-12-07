import React, { Component } from 'react';
import is from 'is_js';
import SearcInput from './SearchInput';
import List from './List';


const univs = [
  { id: 1, title: 'PUC' },
  { id: 2, title: 'Universidad Central ' },
  { id: 3, title: 'Universidad Gabriela Mistral' },
]

const selections = [
  2,
];

class UniversityPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  
  render() {
    const { input } = this.state;
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
        />
      </div>
    );
  }
}

export default UniversityPanel;
