import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../contexts/user-context';
import {ContactsContext, IContact} from '../../contexts/contacts-context';
import {Container, SearchPanel, SearchIcon, SearchInputContainer, ItemsList, EmptyMessage} from './style';
import TextInput from '../text-input/text-input';
import EditableContact from '../editable-contact/editable-contact';

const ContactsList: React.FC = () => {
  const {user} = useContext(UserContext);
  const {state, dispatch} = useContext(ContactsContext);
  const [searchWord, setSearchWord] = useState(``);
  const [filteredContacts, setFilteredContacts] = useState<IContact[]>([]);
  const [openFormId, setOpenFormId] = useState<string | null>(null);
  
  useEffect(() => {
    if (user !== null) {
      fetch(`http://localhost:3002/users/${user.id}/contacts`)
        .then(res => res.json())
        .then(result => {
          dispatch({
            type: `SET_CONTACTS`,
            payload: result
          })
        })
    }
  }, [user, dispatch])



  useEffect(() => {
    const sortAlpabetically = (a: IContact, b: IContact): number => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    }
  
    const filterByWord = (contact: IContact): boolean => {
      return contact.name.toLowerCase().includes(searchWord.toLowerCase());
    } 

    if (searchWord === ``) {
      setFilteredContacts([...state.contacts].sort(sortAlpabetically));
    } else {
      setFilteredContacts([...state.contacts].filter(filterByWord).sort(sortAlpabetically))
    }
    
  }, [state, searchWord])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setSearchWord(e.target.value);
  }

  const handleItemClick = (e: React.SyntheticEvent) => {
    const editElement = (e.target as Element).closest(`[name="edit"]`);
    if(editElement !== null) {
      console.log(editElement.getAttribute(`contact-id`));
    }
  }

  return (
    <div>
      {
        state.contacts.length === 0 ?
        (
          <Container>
            <EmptyMessage>Список контактов пуст</EmptyMessage>
          </Container>
        ) :
        (
          <Container>
            <SearchPanel>
              <SearchIcon />
              <SearchInputContainer>
                <TextInput
                  value={searchWord}
                  name="search-word"
                  placeholder="Поиск контактов"
                  onChange={handleSearchChange}
                />
              </SearchInputContainer>
            </SearchPanel>
            {
              filteredContacts.length === 0 ?
              <EmptyMessage>{`Не найдено контактов с именем "${searchWord}"`}</EmptyMessage> :
              (
                <ItemsList onClick={handleItemClick}>
                {
                  filteredContacts.map(c => (
                    <EditableContact
                      key={c.id}
                      contact={c}
                      openFormId={openFormId}
                      toggleForm={setOpenFormId}
                    />
                  ))
                }
                </ItemsList>
              )
            }
            
          </Container>
        )
      }
    </div>
  )
}

export default ContactsList;