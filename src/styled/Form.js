import React from 'react';
import t from 'prop-types';
import styled from 'styled-components';

export const Form = styled.form`
  width: 20rem;
`;

export const TextInput = ({
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

TextInput.propTypes = {
  label: t.string.isRequired,
  type: t.string,
  errorText: t.string,
  isValid: t.bool,
};

TextInput.defaultProps = {
  errorText: '',
  isValid: false,
  type: 'text',
};
