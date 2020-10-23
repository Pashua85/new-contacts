import React from 'react';
import {IContact} from '../../contexts/contacts-context';
import UpdateContactForm from '../update-contact-form/update-contact-form';
import {ItemContainer} from './style';
import ContactItem from '../contact-item/contact-item';

interface IEditableContactProps {
  contact: IContact,
  toggleForm: (id: string | null) => void,
  openFormId: string | null
}

const EditableContact: React.FC<IEditableContactProps> = ({contact, toggleForm, openFormId}) => {

  return (
    <ItemContainer>
      {
        contact.id === openFormId ?
        <UpdateContactForm
          contact={contact}
          onCloseForm={() => toggleForm(null)}
        /> :
        <ContactItem 
          contact={contact}
          onOpenClick={() => toggleForm(contact.id)}
        />
      }
    </ItemContainer>
  )
};

export default EditableContact;
