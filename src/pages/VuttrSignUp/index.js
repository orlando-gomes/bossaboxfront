import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signUpRequest, closeBanner } from '~/store/modules/auth/actions';

import {
  ModalMask,
  Container,
  Form,
  Input,
  Title,
  ButtonSignUp,
  SignupText,
  Goback,
} from './styles';

import FakeBackground from '~/components/FakeBackground';
import Header from '~/components/Header';
import CriticalBanner from '~/components/CriticalBanner';

import spinnerWhiteButton from '~/assets/spinner-white-button.png';

function VuttrSignUp() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [nameValidation, setNameValidation] = useState({
    isValid: true,
    errorMessage: '',
  });

  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState({
    isValid: true,
    errorMessage: '',
  });

  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState({
    isValid: true,
    errorMessage: '',
  });

  const loading = useSelector((state) => state.auth.loading);
  const { emailAlreadyExists, serverIsDown, message } = useSelector(
    (state) => state.auth.loginError
  );

  function handleNameChanging(e) {
    setName(e.target.value);
  }

  function handleEmailChanging(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChanging(e) {
    setPassword(e.target.value);
  }

  async function fieldsAreValid() {
    let nameValid = false;
    let emailValid = false;
    let passwordValid = false;

    const schemaName = Yup.object().shape({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Please, a little longer'),
    });

    const schemaEmail = Yup.object().shape({
      email: Yup.string()
        .email('Does not look like a valid email')
        .required('Email is required'),
    });

    const schemaPassword = Yup.object().shape({
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Please, at least 6 digits long'),
    });

    await schemaName
      .validate({ name })
      .then(() => {
        setNameValidation({ isValid: true, errorMessage: '' });
        nameValid = true;
      })
      .catch((err) => {
        setNameValidation({ isValid: false, errorMessage: err.errors });
      });

    await schemaEmail
      .validate({ email })
      .then(() => {
        setEmailValidation({ isValid: true, errorMessage: '' });
        emailValid = true;
      })
      .catch((err) => {
        setEmailValidation({ isValid: false, errorMessage: err.errors });
      });

    await schemaPassword
      .validate({ password })
      .then(() => {
        setPasswordValidation({ isValid: true, errorMessage: '' });
        passwordValid = true;
      })
      .catch((err) => {
        setPasswordValidation({ isValid: false, errorMessage: err.errors });
      });

    return nameValid && emailValid && passwordValid;
  }

  async function handleSubmit() {
    if (await fieldsAreValid()) {
      dispatch(signUpRequest(name, email, password));
    }
  }

  function handleCloseBanner() {
    dispatch(closeBanner());
  }

  return (
    <>
      <Header />
      <FakeBackground />

      <ModalMask>
        <Container>
          <Form autoComplete="off">
            <Title>Sign Up</Title>
            <Input
              name="name"
              type="name"
              error={!nameValidation.isValid}
              value={name}
              onChange={handleNameChanging}
              placeholder="Name"
            />
            <span hidden={nameValidation.isValid}>
              {nameValidation.errorMessage}
            </span>

            <Input
              name="email"
              type="email"
              error={!emailValidation.isValid}
              value={email}
              onChange={handleEmailChanging}
              placeholder="Email"
            />
            <span hidden={emailValidation.isValid}>
              {emailValidation.errorMessage}
            </span>

            <Input
              name="password"
              type="password"
              error={!passwordValidation.isValid}
              value={password}
              onChange={handlePasswordChanging}
              placeholder="Password"
            />
            <span hidden={passwordValidation.isValid}>
              {passwordValidation.errorMessage}
            </span>
            <ButtonSignUp
              type="button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <img src={spinnerWhiteButton} alt="loading" />
              ) : (
                'Sign Up'
              )}
            </ButtonSignUp>
            <SignupText>
              Already have an account?
              <Link to="/vuttrsignin">Sign In</Link>
            </SignupText>
            <Goback>
              Or<Link to="/">go back</Link> to mainpage
            </Goback>
          </Form>
        </Container>
      </ModalMask>

      <CriticalBanner
        isVisible={emailAlreadyExists || serverIsDown}
        type="error"
        message={message}
        onDismissing={handleCloseBanner}
      />
    </>
  );
}

export default VuttrSignUp;
