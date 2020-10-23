import React, {useState, useEffect, useContext} from 'react';
import {IContact, ContactsContext} from '../../contexts/contacts-context';
import ContactFormView from '../contact-form-view/contact-form-vew';
import {Container} from './style';

interface IFormProps {
  contact: IContact,
  onCloseForm: () => void
}

const UpdateContactForm: React.FC<IFormProps> = ({contact, onCloseForm}) => {
  const {dispatch} = useContext(ContactsContext);
  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [nameError, setNameError] = useState(``);
  const [phoneError, setPhoneError] = useState(``);

  useEffect(() => {
    setNameError(``);
  }, [name]);

  useEffect(() => {
    setPhoneError(``);
  }, [phone]);

  const validateName = () => {
    if (name.length === 0) {
      setNameError(`Укажите имя`);
      return false;
    }
    return true;
  }

  const validatePhone = () => {
    if (phone.length === 0) {
      setPhoneError(`Укажите номер телефона`);
      return false;
    }
    return true;
  }

  const putContact = () => {
    const newContact = {
      id: contact.id,
      name,
      phone,
      userId: contact.userId
    }
    fetch(`http://localhost:3002/contacts/${contact.id}`, {
      method: `PUT`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: `CHANGE_CONTACT`,
        payload: result
      })
      onCloseForm();
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const telephone = e.target.value;
    if (telephone === `` || /^[+()0-9\b]+$/.test(telephone)) {
      setPhone(telephone);
    } else {
      setPhoneError(`вводите только цифры`)
    }
  }

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if(validateName() && validatePhone()) {
      putContact();
    }
  }

  return (
    <Container>
      <ContactFormView 
        name={name}
        phone={phone}
        nameError={nameError}
        phoneError={phoneError}
        onNameChange={handleNameChange}
        onPhoneChange={handlePhoneChange}
        onFormSubmit={handleFormSubmit}
        onCancelClick={onCloseForm}
        buttonLabel="Изменить"
      />
    </Container>
    
  )
  
};

export default UpdateContactForm;
