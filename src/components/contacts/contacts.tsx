import React from 'react';
import Header from '../header/header';
import {ContactsContextProvider} from '../../contexts/contacts-context';
import CreateContactForm from '../create-contact-form/create-contact-form';
import ContactsList from '../contacts-list/contacts-list';
import {CreateFormWrapper} from './style';

const Contacts: React.FC = () => {
  return (
    <div>
      <Header />
      <ContactsContextProvider>
        <CreateFormWrapper>
          <CreateContactForm />
        </CreateFormWrapper>
        <ContactsList />
      </ContactsContextProvider>

    </div>
  )
}

export default Contacts;
