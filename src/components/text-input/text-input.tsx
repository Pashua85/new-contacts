import React from 'react';
import {Input, Container, ErrorMessage} from './style';

interface ITextInputsProps {
  value: string,
  name: string,
  placeholder: string,
  errorMessage?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<ITextInputsProps> = ({value, placeholder, errorMessage = null, onChange, name}) => {
  return (
    <Container>
      <Input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {
        errorMessage !== null ?
        <ErrorMessage>{errorMessage}</ErrorMessage> : null
      }
    </Container>
  )
};

export default TextInput;