import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import api, { setHeaderAuthorization } from '~/services/api';

import {
  Container,
  ModalMask,
  Form,
  Input,
  TextArea,
  Title,
  InputLabel,
  ButtonsDiv,
  ButtonAdd,
  ButtonCancel,
} from './styles';

import iconAdd from '~/assets/Icon-Add-2px.svg';
import spinnerWhiteButton from '~/assets/spinner-white-button.png';

function ModalAddTool({ visible, onVisibleChange, onAddTool, onServerError }) {
  const [loading, setLoading] = useState(false);

  const [tName, setTName] = useState('');
  const [tNameValidation, setTNameValidation] = useState({
    isValid: true,
    errorMessage: '',
  });

  const [tLink, setTLink] = useState('');
  const [tLinkValidation, setTLinkValidation] = useState({
    isValid: true,
    errorMessage: '',
  });

  const [tDescription, setTDescription] = useState('');
  const [tDescriptionValidation, setTDescriptionValidation] = useState({
    isValid: true,
    errorMessage: '',
  });

  const [tStringTags, setStringTTags] = useState('');
  const [tagsArrayValidation, setTagsArrayValidation] = useState({
    isValid: true,
    errorMessage: '',
  });

  function handleTNameChange(e) {
    setTName(e.target.value);
  }

  function handleTLinkChange(e) {
    setTLink(e.target.value);
  }

  function handleTDescriptionChange(e) {
    setTDescription(e.target.value);
  }

  function handleTTagsChange(e) {
    setStringTTags(e.target.value);
  }

  function dismiss() {
    onVisibleChange();

    setTName('');
    setTNameValidation({
      isValid: true,
      errorMessage: '',
    });

    setTLink('');
    setTLinkValidation({
      isValid: true,
      errorMessage: '',
    });

    setTDescription('');
    setTDescriptionValidation({
      isValid: true,
      errorMessage: '',
    });

    setStringTTags('');
    setTagsArrayValidation({
      isValid: true,
      errorMessage: '',
    });
  }

  async function fieldsAreValid(tagsArray) {
    let tNameValid = false;
    let tLinkValid = false;
    let tDescriptionValid = false;
    let tagsArrayValid = false;

    const schemaTName = Yup.object().shape({
      tName: Yup.string()
        .required('Tool name is required')
        .min(3, 'Please, a little longer'),
    });

    const schemaTLink = Yup.object().shape({
      tLink: Yup.string()
        .required('Tool link is required')
        .url('Does not look like a valid url'),
    });

    const schemaTDescription = Yup.object().shape({
      tDescription: Yup.string()
        .required('Tool description is required')
        .min(3, 'Please, a little longer'),
    });

    const schemaTagsArray = Yup.object().shape({
      tagsArray: Yup.array()
        .of(Yup.string().min(2, 'Define tags at least two digits long'))
        .required('At least one tag is required'),
    });

    await schemaTName
      .validate({ tName })
      .then(() => {
        setTNameValidation({ isValid: true, errorMessage: '' });
        tNameValid = true;
      })
      .catch((err) => {
        setTNameValidation({ isValid: false, errorMessage: err.errors });
      });

    await schemaTLink
      .validate({ tLink })
      .then(() => {
        setTLinkValidation({ isValid: true, errorMessage: '' });
        tLinkValid = true;
      })
      .catch((err) => {
        setTLinkValidation({ isValid: false, errorMessage: err.errors });
      });

    await schemaTDescription
      .validate({ tDescription })
      .then(() => {
        setTDescriptionValidation({ isValid: true, errorMessage: '' });
        tDescriptionValid = true;
      })
      .catch((err) => {
        setTDescriptionValidation({ isValid: false, errorMessage: err.errors });
      });

    await schemaTagsArray
      .validate({ tagsArray })
      .then(() => {
        setTagsArrayValidation({ isValid: true, errorMessage: '' });
        tagsArrayValid = true;
      })
      .catch((err) => {
        setTagsArrayValidation({ isValid: false, errorMessage: err.errors });
      });

    return tNameValid && tLinkValid && tDescriptionValid && tagsArrayValid;
  }

  async function handleAddTool(e) {
    e.preventDefault();
    setLoading(true);

    // Create tags array from the string tags
    const prototype = tStringTags.trim().split(' ');
    const tagsArray = prototype.filter((prot) => prot.trim() !== '');

    if (await fieldsAreValid(tagsArray)) {
      setHeaderAuthorization();
      try {
        await api.post('/tools', {
          title: tName,
          link: tLink,
          description: tDescription,
          tags: tagsArray,
        });
        setLoading(false);
        dismiss();
        onAddTool();
      } catch (err) {
        switch (err.message) {
          case 'Request failed with status code 400':
            setTLinkValidation({
              isValid: false,
              errorMessage: 'Another tool already has this link',
            });
            break;
          case 'Request failed with status code 500':
            onServerError();
            break;

          default:
            break;
        }
        setLoading(false);
      }
    }

    setLoading(false);
  }

  return (
    <ModalMask visible={visible}>
      <Container>
        <Form autoComplete="off" onSubmit={handleAddTool}>
          <Title>
            <img src={iconAdd} alt="add" />
            Add a new tool
          </Title>

          <InputLabel>Tool name</InputLabel>
          <Input
            name="tName"
            type="text"
            error={!tNameValidation.isValid}
            value={tName}
            onChange={handleTNameChange}
          />
          <span hidden={tNameValidation.isValid}>
            {tNameValidation.errorMessage}
          </span>

          <InputLabel>Tool link</InputLabel>
          <Input
            name="tLink"
            type="text"
            error={!tLinkValidation.isValid}
            value={tLink}
            onChange={handleTLinkChange}
          />
          <span hidden={tLinkValidation.isValid}>
            {tLinkValidation.errorMessage}
          </span>

          <InputLabel>Tool description</InputLabel>
          <TextArea
            rows="4"
            name="tDescription"
            error={!tDescriptionValidation.isValid}
            value={tDescription}
            onChange={handleTDescriptionChange}
          />
          <span hidden={tDescriptionValidation.isValid}>
            {tDescriptionValidation.errorMessage}
          </span>

          <InputLabel>Tags</InputLabel>
          <Input
            name="tTags"
            type="text"
            error={!tagsArrayValidation.isValid}
            value={tStringTags}
            onChange={handleTTagsChange}
            placeholder="Type tags separated by a space. (Space, only!)"
          />
          <span hidden={tagsArrayValidation.isValid}>
            {tagsArrayValidation.errorMessage}
          </span>

          <ButtonsDiv>
            <ButtonAdd type="submit" disabled={loading}>
              {loading ? (
                <img src={spinnerWhiteButton} alt="loading" />
              ) : (
                'Add tool'
              )}
            </ButtonAdd>

            <ButtonCancel type="button" onClick={dismiss}>
              Cancel
            </ButtonCancel>
          </ButtonsDiv>
        </Form>
      </Container>
    </ModalMask>
  );
}

export default ModalAddTool;

ModalAddTool.propTypes = {
  visible: PropTypes.bool.isRequired,
  onVisibleChange: PropTypes.func.isRequired,
  onAddTool: PropTypes.func.isRequired,
  onServerError: PropTypes.func.isRequired,
};
