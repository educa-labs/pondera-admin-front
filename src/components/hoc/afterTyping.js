import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default (Target) => {
  class AfterTypingInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
        timeout: null,
      };
      this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(ev) {
      this.props.onChange(ev);
      this.setState((state, props) => {
        clearTimeout(state.timeout);
        return {
          timeout: setTimeout(props.afterTyping, props.time),
        };
      });
    }

    render() {
      const {
        onChange, afterTyping, time, ...rest
      } = this.props;
      return (
        <Target onChange={this.handleOnChange} {...rest} />
      );
    }
  }

  AfterTypingInput.defaultProps = {
    time: 500,
  };

  AfterTypingInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    afterTyping: PropTypes.func.isRequired,
    time: PropTypes.number,
  };

  return AfterTypingInput;
};
