import React from 'react';
import PropTypes from 'prop-types';

import api, { setHeaderAuthorization } from '~/services/api';

import {
  Container,
  ModalMask,
  Form,
  Title,
  Warning,
  ButtonsDiv,
  ButtonRemove,
  ButtonCancel,
} from './styles';

import iconAddRed from '~/assets/Icon-Add-red-2px.svg';

function ModalRemoveTool({
  visible,
  onVisibleChange,
  toolToDelete,
  onDeleteTool,
}) {
  function dismiss() {
    onVisibleChange();
  }

  async function handleRemoveTool(e) {
    e.preventDefault();
    setHeaderAuthorization();

    try {
      await api.delete(`/tools/${toolToDelete.id}`);
      dismiss();
      onDeleteTool();
      console.tron.log('Removeu a tool');
    } catch (err) {
      console.tron.log('Erro no Remove a tool');
      console.tron.log(err);
    }
  }

  return (
    <ModalMask visible={visible}>
      <Container>
        <Form onSubmit={handleRemoveTool}>
          <Title>
            <img src={iconAddRed} alt="add" />
            Remove tool
          </Title>

          <Warning>
            Are you sure you want to remove{' '}
            <span>{toolToDelete && toolToDelete.title}</span>?
          </Warning>

          <ButtonsDiv>
            <ButtonCancel type="button" onClick={dismiss}>
              Cancel
            </ButtonCancel>

            <ButtonRemove>Yes remove</ButtonRemove>
          </ButtonsDiv>
        </Form>
      </Container>
    </ModalMask>
  );
}

export default ModalRemoveTool;

ModalRemoveTool.propTypes = {
  visible: PropTypes.bool.isRequired,
  onVisibleChange: PropTypes.func.isRequired,
  onDeleteTool: PropTypes.func.isRequired,
  toolToDelete: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};

ModalRemoveTool.defaultProps = {
  toolToDelete: null,
};
