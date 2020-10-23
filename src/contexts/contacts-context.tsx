import React, {useReducer, createContext, ReactNode, Dispatch} from 'react';

export interface IContact {
  id: string,
  name: string,
  phone: string,
  userId: string
}


type Action = 
  | {type: `SET_CONTACTS`, payload: IContact[]}
  | {type: `CHANGE_CONTACT`, payload: IContact}
  | {type: `DELETE_CONTACT`, payload: string}
  | {type: `ADD_CONTACT`, payload: IContact}

type ContactsContextType = {
  state: {
    contacts: IContact[]
  },
  dispatch: Dispatch<Action>
}

const initialState: ContactsContextType = {
  state: {
    contacts: []
  },
  dispatch: () => null
}

export const ContactsContext = createContext<ContactsContextType>(initialState);

type Props = {
  children: ReactNode
}

interface IState {
  contacts: IContact[]
}


const contactReducer = (state: IState, action: Action) => {
  switch(action.type) {
    case `SET_CONTACTS`: {
      return {
        contacts: action.payload
      }
    }
    case `CHANGE_CONTACT`: {
      return {
        contacts: state.contacts.map(c => {
          if (c.id === action.payload.id) {
            return action.payload
          } else {
            return c;
          }
        })
      }
    }
    case `DELETE_CONTACT`: {
      return {
        contacts: [...state.contacts].filter(c => c.id !== action.payload)
      }
    }
    case `ADD_CONTACT`: {
      return {
        contacts: [...state.contacts, action.payload]
      }
    }
    default: 
      return state;
  }
}


export const ContactsContextProvider = (props: Props) => {
  const [state, dispatch] = useReducer(contactReducer, {contacts: []});

  return (
    <ContactsContext.Provider value={{state, dispatch}}>
      {props.children}
    </ContactsContext.Provider>
  )
}