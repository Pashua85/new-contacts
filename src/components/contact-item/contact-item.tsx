import React, {useContext} from 'react';
import {IContact, ContactsContext} from '../../contexts/contacts-context';
import {Item, ItemInfo, NameText, PhoneNumber, ButtonGroup, Button} from './style';

interface IContactItemProps {
  contact: IContact,
  onOpenClick: () => void
}

const ContactItem: React.FC<IContactItemProps> = ({contact, onOpenClick}) => {
  const {dispatch} = useContext(ContactsContext);

  const handleDelete = () => {
    fetch(`http://localhost:3002/contacts/${contact.id}`, {
      method: `DELETE`
    })
    .then(() => {
      dispatch({
        type: `DELETE_CONTACT`,
        payload: contact.id
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <Item>
      <ItemInfo>
        <NameText>{contact.name}</NameText>
        <PhoneNumber>тел: {contact.phone}</PhoneNumber>
      </ItemInfo>
      <ButtonGroup>
        <Button name="edit" onClick={onOpenClick} />
        <Button name="delete" onClick={handleDelete} />
      </ButtonGroup>
    </Item>
  );
};

export default ContactItem;