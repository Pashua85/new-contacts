import React, {useContext, useState, useEffect} from 'react';
import {Redirect, RouteComponentProps, withRouter} from 'react-router';
import {Form, Header, InputWrapper, SubmitButton, Link, FormError, Paragraph} from './style';
import {UserContext} from '../../contexts/user-context';
import TextInput from '../text-input/text-input';
import PasswordInput from '../password-input/password-input';

type LoginFormProps = RouteComponentProps<any> & {};

const LoginForm: React.FC<LoginFormProps> = (props) => {
  const {isAuth, setUser, setIsAuth} = useContext(UserContext);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [emailError, setEmailError] = useState(``);
  const [passwordError, setPasswordError] = useState(``);
  const [formError, setFormError] = useState(``);

  useEffect(() => {
    const newUserEmail = localStorage.getItem(`userEmail`);
    const newPassword = localStorage.getItem(`password`);
    if (newUserEmail !== null) {
      setEmail(newUserEmail);
    }
    if (newPassword !== null) {
      setPassword(newPassword);
    }
  }, []);

  useEffect(() => {
    setEmailError(``);
  }, [email]);

  useEffect(() => {
    setPasswordError(``);
  }, [password]);

  useEffect(() => {
    setFormError(``);
  }, [email, password]);

  const validateEmail = () => {
    if (email.length > 0) {
      return true;
    } else {
      setEmailError(`Укажите e-mail`);
      return false;
    }
  };

  const validatePassword = () => {
    if (password.length > 0) {
      return true;
    } else {
      setPasswordError(`Укажите пароль`);
      return false;
    }
  };

  const getUser = () => {
    fetch(`http://localhost:3002/users?email=${email}&password=${password}`)
      .then(res => res.json())
      .then(result => {
        if (result.length === 0) {
          setFormError(`Пользователя с такими данными не обнаружено`)
        } else {
          setUser({
            id: result[0].id,
            email: result[0].email
          });
          localStorage.setItem(`userEmail`, result[0].email);
          localStorage.setItem(`userId`, result[0].id);
          localStorage.setItem(`password`, result[0].password);
          sessionStorage.setItem(`isAuth`, `true`);
          setIsAuth(true);
          props.history.push(`/`);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if(validateEmail() && validatePassword()) {
      getUser();
    }
  }

  if (isAuth) {
    return (
      <Redirect to="/" />
    )
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Header>Вход</Header>
      <InputWrapper>
        <TextInput
          value={email}
          name="email"
          placeholder="Email"
          onChange={handleEmailChange}
          errorMessage={emailError}
        />
      </InputWrapper>
        
      <InputWrapper>
        <PasswordInput
          value={password}
          name="password"
          placeholder="Пароль"
          onChange={handlePasswordChange}
          errorMessage={passwordError}
        />
      </InputWrapper>

      <FormError>{formError}</FormError>
      <SubmitButton type="submit">
        Войти
      </SubmitButton>
      <Paragraph>
        <Link href="/sign-up">Создать новый аккаунт</Link>
      </Paragraph>
      
    </Form>
  );
}

export default withRouter(LoginForm);