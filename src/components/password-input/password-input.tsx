import React, {useState} from 'react';
import { ErrorMessage } from '../text-input/style';
import {Container, Input, PasswordButton} from './style';

interface IPasswordInputProps {
  value: string,
  name: string,
  placeholder: string,
  errorMessage?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordInput: React.FC<IPasswordInputProps> = ({value, name, placeholder, errorMessage = null, onChange}) => {
  const [isShown, setIsShown] = useState(false);

  const handleIsShownChange = () => {
    setIsShown((prevState) => !prevState);
  }

  return (
    <Container>
      {
        isShown ?
        <Input 
          type="text"
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        /> :
        <Input 
          type="password"
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      }
      {errorMessage !== null ?
        <ErrorMessage>{errorMessage}</ErrorMessage> : null
      }
      <PasswordButton
        isShown={isShown}
        onClick={handleIsShownChange}
      >
        скрыть пароль
      </PasswordButton>
    </Container>
  )
}

export default PasswordInput;