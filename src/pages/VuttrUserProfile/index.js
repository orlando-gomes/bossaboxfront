import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Header from '~/components/Header';

import {
  UsefulArea,
  Container,
  Title,
  ButtonAvatar,
  Form,
  Input,
  Separator,
  ButtonUpdate,
} from './styles';

import {
  updateUserRequest,
  cleanExternalFailures,
  closeBanner,
} from '~/store/modules/user/actions';

import ModalChangeAvatar from '~/components/ModalChangeAvatar';
import CriticalBanner from '~/components/CriticalBanner';

import unknown from '~/assets/avatar-unknown.png';
import iconUser from '~/assets/Icon-User-Ink-2px.svg';
import spinnerWhiteButton from '~/assets/spinner-white-button.png';

import man1 from '~/assets/avatar-man1.jpg';
import man2 from '~/assets/avatar-man2.jpg';
import man3 from '~/assets/avatar-man3.jpg';
import woman1 from '~/assets/avatar-woman1.jpg';
import woman2 from '~/assets/avatar-woman2.jpg';
import woman3 from '~/assets/avatar-woman3.jpg';

function VuttrUserProfile() {
  const dispatch = useDispatch();

  const updateSuccess = useSelector((state) => state.user.updateSuccess);

  const userProfile = useSelector((state) => state.user.userProfile);
  const loading = useSelector((state) => state.user.loading);
  const {
    emailAlreadyExists,
    passwordIsWrong,
    serverIsDown,
    message,
  } = useSelector((state) => state.user.updateError);

  const [modalChangeVisible, setModalChangeVisible] = useState(false);
  const [avatar, setAvatar] = useState(unknown);
  const [avatarName, setAvatarName] = useState('');

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

  const [newPassword, setNewPassword] = useState('');
  const [newPasswordValidation, setNewPasswordValidation] = useState({
    isValid: true,
    errorMessage: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState({
    isValid: true,
    errorMessage: '',
  });

  function dismissModalChange() {
    setModalChangeVisible(false);
  }

  function callModalChangeAvatar() {
    setModalChangeVisible(true);
  }

  function avatarPathByName(avatName) {
    let newAvatar;
    switch (avatName) {
      case 'man1':
        newAvatar = man1;
        break;
      case 'man2':
        newAvatar = man2;
        break;
      case 'man3':
        newAvatar = man3;
        break;
      case 'woman1':
        newAvatar = woman1;
        break;
      case 'woman2':
        newAvatar = woman2;
        break;
      case 'woman3':
        newAvatar = woman3;
        break;

      default:
        newAvatar = unknown;
        break;
    }
    return newAvatar;
  }

  useEffect(() => {
    setAvatar(avatarPathByName(userProfile.avatar_name));
    setAvatarName(userProfile.avatar_name);
    setName(userProfile.name);
    setEmail(userProfile.email);
  }, [userProfile]);

  function handleChoosingAvatar(avatName) {
    setAvatarName(avatName);
    setAvatar(avatarPathByName(avatName));
  }

  function handleNameChanging(e) {
    setName(e.target.value);
  }

  function handleEmailChanging(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChanging(e) {
    setPassword(e.target.value);
  }

  function handleNewPasswordChanging(e) {
    setNewPassword(e.target.value);
  }

  function handleConfirmPasswordChanging(e) {
    setConfirmPassword(e.target.value);
  }

  async function fieldsAreValid() {
    dispatch(cleanExternalFailures());

    let nameValid = false;
    let emailValid = false;
    let passwordValid = false;
    let newPasswordValid = true;
    let confirmPasswordValid = true;

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

    const schemaNewPassword = Yup.object().shape({
      newPassword: Yup.string().min(6, 'Please, at least 6 digits long'),
    });

    const schemaConfirmPassword = Yup.object().shape({
      newPassword: Yup.string(),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref('newPassword')],
        'Error confirmation password'
      ),
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

    if (newPassword) {
      await schemaNewPassword
        .validate({ newPassword })
        .then(() => {
          setNewPasswordValidation({ isValid: true, errorMessage: '' });
          newPasswordValid = true;
        })
        .catch((err) => {
          setNewPasswordValidation({
            isValid: false,
            errorMessage: err.errors,
          });
        });

      await schemaConfirmPassword
        .validate({ newPassword, confirmPassword })
        .then(() => {
          setConfirmPasswordValidation({ isValid: true, errorMessage: '' });
          confirmPasswordValid = true;
        })
        .catch((err) => {
          setConfirmPasswordValidation({
            isValid: false,
            errorMessage: err.errors,
          });
        });
    }

    return (
      nameValid &&
      emailValid &&
      passwordValid &&
      newPasswordValid &&
      confirmPasswordValid
    );
  }

  async function handleSubmit() {
    if (await fieldsAreValid()) {
      dispatch(
        updateUserRequest(
          avatarName,
          name,
          email,
          password,
          newPassword,
          confirmPassword
        )
      );

      setPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  }

  function handleCloseBanner() {
    dispatch(closeBanner());
  }

  return (
    <>
      <Header />
      <UsefulArea>
        <Container>
          <Title>
            <img src={iconUser} alt="user" />
            My profile
          </Title>

          <ButtonAvatar type="button" onClick={callModalChangeAvatar}>
            <img className="avatar" src={avatar} alt="avatar" />
          </ButtonAvatar>
          <div>Change your avatar</div>

          <Form>
            <Input
              name="name"
              type="text"
              error={!nameValidation.isValid}
              value={name}
              onChange={handleNameChanging}
            />
            <span hidden={nameValidation.isValid}>
              {nameValidation.errorMessage}
            </span>

            <Input
              name="email"
              type="email"
              error={!emailValidation.isValid || emailAlreadyExists}
              value={email}
              onChange={handleEmailChanging}
            />
            <span hidden={emailValidation.isValid && !emailAlreadyExists}>
              {emailValidation.errorMessage + message}
            </span>

            <Separator />

            <Input
              name="password"
              type="password"
              error={!passwordValidation.isValid || passwordIsWrong}
              value={password}
              placeholder="Enter your current password"
              onChange={handlePasswordChanging}
            />
            <span hidden={passwordValidation.isValid && !passwordIsWrong}>
              {passwordValidation.errorMessage + message}
            </span>

            <Input
              name="newPassword"
              type="password"
              error={!newPasswordValidation.isValid}
              value={newPassword}
              placeholder="Enter your new password if you wanna change it"
              onChange={handleNewPasswordChanging}
            />
            <span hidden={newPasswordValidation.isValid}>
              {newPasswordValidation.errorMessage}
            </span>

            <Input
              name="confirmPassword"
              type="password"
              error={!confirmPasswordValidation.isValid}
              value={confirmPassword}
              placeholder="Enter the new password again to confirm"
              onChange={handleConfirmPasswordChanging}
            />
            <span hidden={confirmPasswordValidation.isValid}>
              {confirmPasswordValidation.errorMessage}
            </span>

            <ButtonUpdate
              type="button"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? (
                <img src={spinnerWhiteButton} alt="loading" />
              ) : (
                'Update profile'
              )}
            </ButtonUpdate>
          </Form>
        </Container>
      </UsefulArea>

      <ModalChangeAvatar
        visible={modalChangeVisible}
        onVisibleChange={dismissModalChange}
        onChoosingAvatar={handleChoosingAvatar}
      />

      <CriticalBanner
        isVisible={updateSuccess || serverIsDown}
        type={updateSuccess ? 'success' : 'error'}
        message={
          serverIsDown ? message : 'Your data were successfully updated.'
        }
        onDismissing={handleCloseBanner}
      />
    </>
  );
}

export default VuttrUserProfile;
