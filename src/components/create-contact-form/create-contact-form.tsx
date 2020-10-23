import React, {useState, useEffect, useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
import {UserContext} from '../../contexts/user-context';
import {ContactsContext} from '../../contexts/contacts-context';
import {Container, OpenButton} from './style';
import ContactFormView from '../contact-form-view/contact-form-vew';

const CreateContactForm: React.FC = () => {
  const {user} = useContext(UserContext);
  const {dispatch} = useContext(ContactsContext);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(``);
  const [phone, setPhone] = useState(``);
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

  const postContact = () => {
    if (user !== null) {
      const newContact = {
        id: uuidv4(),
        name,
        phone,
        userId: user.id
      }

      fetch(`http://localhost:3002/contacts`, {
        method: `POST`,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
      })
      .then(res => res.json())
      .then(result => {
        setName('');
        setPhone(``);
        dispatch({
          type: `ADD_CONTACT`,
          payload: result
        })
        setIsOpen(false);
      })
      .catch(err => {
        console.log(err)
      });
    }
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

  const handleOpenClick = () => {
    setIsOpen(prevState => !prevState);
  }

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateName() && validatePhone()) {
      postContact();
    }
  }

  return (
    <Container>
      {
        isOpen ?
        <ContactFormView 
          name={name}
          phone={phone}
          nameError={nameError}
          phoneError={phoneError}
          onNameChange={handleNameChange}
          onPhoneChange={handlePhoneChange}
          onFormSubmit={handleFormSubmit}
          onCancelClick={handleOpenClick}
          buttonLabel="Добавить"
        /> :
        <OpenButton
          type="button"
          onClick={handleOpenClick}
        >
          Добавить контакт
        </OpenButton>
      }
    </Container>
  );
};

export default CreateContactForm;