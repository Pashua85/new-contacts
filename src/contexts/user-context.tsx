import React, {useState, useEffect, createContext, ReactNode, Dispatch, SetStateAction} from 'react';

interface IUser {
  id: string,
  email: string
}

type UserContextType = {
  isAuth: boolean,
  user: IUser | null,
  setUser: Dispatch<SetStateAction<IUser | null>>
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

type Props = {
  children: ReactNode,
}

export const UserContextProvider = (props: Props) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const newUserId = localStorage.getItem(`userId`);
    const newUserEmail = localStorage.getItem(`userEmail`);
    const newIsAuthString = sessionStorage.getItem(`isAuth`);
    if (newUserId !== null && newUserEmail !== null && newIsAuthString === `true`) {
      setUser({
        id: newUserId,
        email: newUserEmail
      })
    }
    if (newIsAuthString !== null) {
      setIsAuth(newIsAuthString === `true`);
    }
  }, [])


  return (
    <UserContext.Provider value={{user, isAuth, setUser, setIsAuth}}>
      {props.children}
    </UserContext.Provider>
  )
}


