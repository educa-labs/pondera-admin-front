import React, { Component, cloneElement } from 'react';

export default Input => (
  class Input extends Component {
    constructor(props) {
      super(props);
      this.state = {
        timeout: null,
      }
      this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(ev) {
      const { onChange, afterTyping, time} = this.props;
      onChange(ev);
      clearTimeout(this.state.timeout);
      this.setState({
        timeot: setTimeout(afterTyping, time),
      });
    }

    render() {
      return (
        <Input
          onChange={this.handleOnChange}
          value={this.props.value}
        />
      )
    }
  }
);
