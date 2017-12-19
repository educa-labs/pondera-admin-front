import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';
import afterTyping from 'react-after-typing';

export const Form = styled.form`
  width: 20rem;
`;

const Input = ({
  isValid, errorText, label, type, ...props
}) => {
  const className = `input ${isValid ? 'is-success' : ''} ${errorText ? 'is-danger' : ''}`;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className={className} type={type} {...props} />
      </div>
      <p className="help is-danger">{errorText}</p>
    </div>
  );
};

Input.propTypes = {
  label: t.string.isRequired,
  type: t.string,
  errorText: t.string,
  isValid: t.bool,
};

Input.defaultProps = {
  errorText: '',
  isValid: false,
  type: 'text',
};

export const TextInput = afterTyping(Input);