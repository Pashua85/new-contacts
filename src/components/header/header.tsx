import React, {useContext} from 'react';
import {PageHeader, Container, Title, UserText, EmailName, ChangeLink, Text} from './style';
import {UserContext} from '../../contexts/user-context';

const Header: React.FC= () => {
  const {user, setIsAuth, setUser} = useContext(UserContext);

  const handleExit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setUser(null);
    setIsAuth(false);
    sessionStorage.setItem(`isAuth`, `false`);
  }

  return (
    <PageHeader>
      <Container>
        <Text>
          <Title>Контакты</Title>
          <EmailName>{user?.email}</EmailName>
        </Text>
        <ChangeLink href="#" onClick={handleExit}>Выйти</ChangeLink>
      </Container>
    </PageHeader>
  );
}

export default Header;
