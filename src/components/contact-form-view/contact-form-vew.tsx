import React from 'react';
import {Form, InputWrapper, ButtonRow, SubmitButton, CancelButton} from './style';
import TextInput from '../text-input/text-input';

interface ContactFormViewProps {
  name: string,
  phone: string,
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onFormSubmit: (e: React.SyntheticEvent) => void,
  onCancelClick: () => void,
  buttonLabel: string,
  nameError?: string,
  phoneError?: string
}

const ContactFormView: React.FC<ContactFormViewProps> = ({
    onNameChange, onPhoneChange, name, phone, onFormSubmit, buttonLabel, onCancelClick, nameError, phoneError
  }) => {
  return (
    <Form onSubmit={onFormSubmit} autoComplete="off">
      <InputWrapper>
        <TextInput 
          value={name}
          name="contact-name"
          placeholder="имя контакта"
          onChange={onNameChange}
          errorMessage={nameError}
        />
      </InputWrapper>
      <InputWrapper>
        <TextInput
          value={phone}
          name="contact-phone"
          placeholder="номер телефона"
          onChange={onPhoneChange}
          errorMessage={phoneError}
        />
      </InputWrapper>
      <ButtonRow>
        <SubmitButton type="submit">{buttonLabel}</SubmitButton>
        <CancelButton
          type="button"
          onClick={onCancelClick}
        >
          Отмена
        </CancelButton>
      </ButtonRow>
    </Form>
  )
}

export default ContactFormView;