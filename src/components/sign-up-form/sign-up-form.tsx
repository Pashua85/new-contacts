import React, {useState, useEffect, useContext} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {v4 as uuidv4} from 'uuid';
import {UserContext} from '../../contexts/user-context';
import {Form, Header, InputWrapper, SubmitButton, Paragraph, Link} from './style';
import TextInput from '../text-input/text-input';
import PasswordInput from '../password-input/password-input';

type SignUpFormProps = RouteComponentProps<any> & {};

const SignUpForm: React.FC<SignUpFormProps> = (props) => {
  const {setUser, setIsAuth} = useContext(UserContext);
  const [email, setEmail] = useState(``);
  const [password1, setPassword1] = useState(``);
  const [password2, setPassword2] = useState(``);
  const [emailError, setEmailError] = useState(``);
  const [password1Error, setPassword1Error] = useState(``);
  const [password2Error, setPassword2Error] = useState(``);

  useEffect(() => {
    setEmailError(``);
  }, [email])

  useEffect(() => {
    setPassword1Error(``);
  }, [password1])

  useEffect(() => {
    setPassword2Error(``);
  }, [password2]);

  const validateEmail = () => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.length === 0) {
      setEmailError(`Укажите email`);
      return false;
    } else if (!email.match(mailformat)) {
      setEmailError(`Некорректный email`);
      return false;
    } else {
      return true;
    }
  }

  const validatePasswords = () => {
    if (password1 === ``) {
      setPassword1Error(`Укажите пароль`);
      return false;
    } else if (password2 === ``) {
      setPassword2Error(`Продублирйте пароль`);
      return false;
    } else if (password1 !== password2) {
      setPassword2Error(`Пароли не совпадают`);
      return false;
    } else {
      return true;
    }
  }

  const postUser = () => {
    const newUser = {
      id: uuidv4(),
      email,
      password: password1
    }

    fetch(`http://localhost:3002/users?email=${email}`)
      .then(res => res.json())
      .then(result => {
        if (result.length > 0) {
          setEmailError(`Пользователь с этим адресом уже зарегистрирован`)
        } else {
          fetch(`http://localhost:3002/users`, {
            method: `POST`,
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
          })
          .then(res => res.json())
          .then(result => {
            setUser({
              id: result.id,
              email: result.email
            });
            localStorage.setItem(`password`, result.password);
            localStorage.setItem(`userEmail`, result.email);
            localStorage.setItem(`userId`, result.id);
            setIsAuth(true);
            sessionStorage.setItem(`isAuth`, `true`);
            props.history.push(`/`);
          })
          .catch(err => {
            throw new Error(err)
          })
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword1(e.target.value);
  };

  const handlePassword2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateEmail() && validatePasswords()) {
      postUser();
    }
  }

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Header>Регистрация</Header>
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
          value={password1}
          name="password"
          placeholder="Пароль"
          onChange={handlePassword1Change}
          errorMessage={password1Error}
        />
      </InputWrapper>
      <InputWrapper>
        <PasswordInput
          value={password2}
          name="password"
          placeholder="Повторите пароль"
          onChange={handlePassword2Change}
          errorMessage={password2Error}
        />
      </InputWrapper>
      <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
      <Paragraph>
        <Link href="/login">Уже есть аккаунт?</Link>
      </Paragraph>
    </Form>
  ); 
};

export default withRouter(SignUpForm);
