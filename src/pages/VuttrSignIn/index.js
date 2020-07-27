import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signInRequest, closeBanner } from '~/store/modules/auth/actions';

import {
  ModalMask,
  Container,
  Form,
  Input,
  Title,
  ButtonSignIn,
  SignupText,
  Goback,
} from './styles';

import FakeBackground from '~/components/FakeBackground';
import Header from '~/components/Header';
import CriticalBanner from '~/components/CriticalBanner';

import spinnerWhiteButton from '~/assets/spinner-white-button.png';

function VuttrSignIn() {
  const dispatch = useDispatch();

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
  const { dataIsWrong, serverIsDown, message } = useSelector(
    (state) => state.auth.loginError
  );

  useEffect(() => {
    dispatch(closeBanner());
  }, []);

  function handleEmailChanging(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChanging(e) {
    setPassword(e.target.value);
  }

  async function fieldsAreValid() {
    let emailValid = false;
    let passwordValid = false;

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

    return emailValid && passwordValid;
  }

  async function handleSubmit() {
    if (await fieldsAreValid()) {
      dispatch(signInRequest(email, password));
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
            <Title>Sign In</Title>
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
            <ButtonSignIn
              type="button"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <img src={spinnerWhiteButton} alt="loading" />
              ) : (
                'Sign In'
              )}
            </ButtonSignIn>
            <SignupText>
              Don&#39;t you have an account?
              <Link to="/vuttrsignup">Sign Up</Link>
            </SignupText>
            <Goback>
              Or<Link to="/">go back</Link> to mainpage
            </Goback>
          </Form>
        </Container>
      </ModalMask>

      <CriticalBanner
        isVisible={dataIsWrong || serverIsDown}
        type="error"
        message={message}
        onDismissing={handleCloseBanner}
      />
    </>
  );
}

export default VuttrSignIn;
