import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';

import { alreadyAnimated } from '~/store/modules/auth/actions';

import ModalAddTool from '~/components/ModalAddTool';
import ModalRemoveTool from '~/components/ModalRemoveTool';
import Header from '~/components/Header';

import api, { setHeaderAuthorization } from '~/services/api';

import {
  UsefulArea,
  Container,
  AppName,
  SubName,
  Controls,
  SelectAndCheckbox,
  ButtonAdd,
  ButtonAddText,
  ListTool,
  CardTool,
  TitleAndButton,
  ToolTitle,
  ButtonRemove,
  ButtonRemoveText,
  ToolDescription,
  TagList,
  Tag,
  Pagination,
  PreviousNext,
  Page,
  ModalMask,
  customSelectStyles,
} from './styles';

import CriticalBanner from '~/components/CriticalBanner';
import iconAddWhite from '~/assets/Icon-Add-white-2px.svg';
import iconClose from '~/assets/Icon-Close-2px.svg';
import ChevronLeft from '~/assets/Chevron-Left.svg';
import ChevronLeftDisable from '~/assets/Chevron-Left-disable.svg';
import ChevronRight from '~/assets/Chevron-Right.svg';
import ChevronRightDisable from '~/assets/Chevron-Right-disable.svg';

function VuttrMainPage() {
  const [toolsToShow, setToolsToShow] = useState([]);
  const [toolToDelete, setToolToDelete] = useState({});

  const dispatch = useDispatch();

  const afterLogin = useSelector((state) => state.auth.afterLogin);
  const [becomingTransparent, setBecomingTransparent] = useState(false);

  const [optionsForSelectBox, setOptionsForSelectBox] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [inTagIsChecked, setInTagIsChecked] = useState(false);
  const [mustUpgradeDataToShow, setMustUpgradeDataToShow] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [modalRemoveVisible, setModalRemoveVisible] = useState(false);

  const [serverIsDown, setServerIsDown] = useState(false);

  function animate() {
    setTimeout(() => {
      setBecomingTransparent(true);
    }, 1000);

    setTimeout(() => {
      dispatch(alreadyAnimated());
    }, 2000);
  }

  useEffect(() => {
    if (afterLogin) {
      animate();
    }
  });

  useEffect(() => {
    async function loadTools() {
      setHeaderAuthorization();

      let response;

      try {
        if (inTagIsChecked) {
          response = await api.get('/tools', {
            params: { tag: selectedOption },
          });
        } else {
          response = await api.get('/tools');
        }

        const { data } = response;

        let lastPag;
        if (data.length === 0) {
          lastPag = 1;
        } else {
          lastPag = Math.ceil(data.length / 3);
        }
        setLastPage(lastPag);

        const firstIndex = (currentPage - 1) * 3;
        let lastIndex;
        if (currentPage === lastPag) {
          lastIndex = data.length - 1;
        } else {
          lastIndex = firstIndex + 2;
        }

        const dataToShow = [];
        for (let index = firstIndex; index <= lastIndex; index += 1) {
          dataToShow.push(data[index]);
        }

        setToolsToShow(dataToShow);

        // populating the selectBox
        const response2 = await api.get('tags');
        const tags = response2.data;

        const op = tags.map((tag) => ({ value: tag.title, label: tag.title }));
        setOptionsForSelectBox(op);
      } catch (err) {
        setServerIsDown(true);
      }
    }

    loadTools();
  }, [currentPage, mustUpgradeDataToShow, inTagIsChecked, selectedOption]);

  function callModalAdd() {
    setModalAddVisible(true);
  }

  function dismissModalAdd() {
    setModalAddVisible(false);
  }

  function callModalRemove(toolId) {
    const deletingTool = toolsToShow.find((tool) => tool.id === toolId);
    setToolToDelete(deletingTool);
    setModalRemoveVisible(true);
  }

  function dismissModalRemove() {
    setModalRemoveVisible(false);
  }

  function refreshToolList() {
    if (currentPage === 1) {
      setMustUpgradeDataToShow(mustUpgradeDataToShow + 1);
    } else {
      setCurrentPage(1);
    }
  }

  function handleSelect({ value }) {
    setSelectedOption(value);

    if (inTagIsChecked) {
      refreshToolList();
    }
  }

  function handleClickCheckbox(e) {
    if (e.target.checked) {
      setInTagIsChecked(true);
    } else {
      setInTagIsChecked(false);
    }

    if (selectedOption) {
      refreshToolList();
    }
  }

  function handlePrevious() {
    setCurrentPage(currentPage - 1);
  }

  function handleNext() {
    setCurrentPage(currentPage + 1);
  }

  function toPage(page) {
    setCurrentPage(page);
  }

  function renderPagination() {
    const jsx = [];
    if (lastPage <= 10) {
      for (let page = 1; page < lastPage + 1; page += 1) {
        jsx.push(
          <Page
            key={page}
            active={page === currentPage}
            onClick={() => toPage(page)}
          >
            {page}
          </Page>
        );
      }
    } else if (currentPage < 5) {
      for (let page = 1; page < 6; page += 1) {
        jsx.push(
          <Page active={page === currentPage} onClick={() => toPage(page)}>
            {page}
          </Page>
        );
      }
      jsx.push(<Page>...</Page>);
      jsx.push(<Page onClick={() => toPage(lastPage)}>{lastPage}</Page>);
    } else if (currentPage >= 5 && currentPage < lastPage - 3) {
      jsx.push(<Page onClick={() => toPage(1)}>1</Page>);
      jsx.push(<Page>...</Page>);
      for (let page = currentPage - 2; page < currentPage + 3; page += 1) {
        jsx.push(
          <Page active={page === currentPage} onClick={() => toPage(page)}>
            {page}
          </Page>
        );
      }
      jsx.push(<Page>...</Page>);
      jsx.push(<Page onClick={() => toPage(lastPage)}>{lastPage}</Page>);
    } else {
      jsx.push(<Page onClick={() => toPage(1)}>1</Page>);
      jsx.push(<Page>...</Page>);
      for (let page = lastPage - 4; page < lastPage + 1; page += 1) {
        jsx.push(
          <Page active={page === currentPage} onClick={() => toPage(page)}>
            {page}
          </Page>
        );
      }
    }

    return jsx;
  }

  function handleIfToolWasAdded() {
    dismissModalAdd();
    refreshToolList();
  }

  function handleIfToolWasDeleted() {
    dismissModalRemove();
    refreshToolList();
  }

  function handleCloseBanner() {
    setServerIsDown(false);
  }

  function handleServerErrorOnAddingTool() {
    setServerIsDown(true);
  }

  return (
    <>
      <Header />
      <UsefulArea isBlured={afterLogin}>
        <Container>
          <AppName>VUTTR</AppName>
          <SubName>Very Useful Tools to Remember</SubName>

          <Controls>
            <SelectAndCheckbox>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                placeholder="Select a tag"
                options={optionsForSelectBox}
                onChange={(props) => handleSelect(props)}
                styles={customSelectStyles}
              />

              <input
                type="checkbox"
                id="checkbox"
                name="bytags"
                value="bytags"
                onClick={handleClickCheckbox}
              />
              <span htmlFor="checkbox">search in tag</span>
            </SelectAndCheckbox>
            <ButtonAdd type="button" onClick={callModalAdd}>
              <img src={iconAddWhite} alt="add" />
              <ButtonAddText>Add</ButtonAddText>
            </ButtonAdd>
          </Controls>

          <ListTool>
            {toolsToShow.length > 0 ? (
              toolsToShow.map((tool) => (
                <CardTool key={tool.id}>
                  <TitleAndButton>
                    <ToolTitle href={tool.link} target="_blank">
                      {tool.title}
                    </ToolTitle>
                    <ButtonRemove
                      key={tool.id}
                      onClick={() => {
                        callModalRemove(tool.id);
                      }}
                    >
                      <img src={iconClose} alt="remove" />
                      <ButtonRemoveText>Remove</ButtonRemoveText>
                    </ButtonRemove>
                  </TitleAndButton>

                  <ToolDescription>{tool.description}</ToolDescription>
                  <TagList>
                    {tool.tags.map((tag) => (
                      <Tag
                        key={tag}
                        highlighted={
                          selectedOption &&
                          inTagIsChecked &&
                          selectedOption === tag
                        }
                      >
                        #{tag}
                      </Tag>
                    ))}
                  </TagList>
                </CardTool>
              ))
            ) : (
              <CardTool>
                <ToolTitle>No tool was registered yet</ToolTitle>
                <ToolDescription>Be the first to add a tool</ToolDescription>
              </CardTool>
            )}
          </ListTool>

          <Pagination>
            <img
              src={currentPage === 1 ? ChevronLeftDisable : ChevronLeft}
              alt="Previous"
            />
            <PreviousNext onClick={handlePrevious} disabled={currentPage === 1}>
              Previous
            </PreviousNext>

            {renderPagination()}

            <PreviousNext
              onClick={handleNext}
              disabled={currentPage === lastPage}
            >
              Next
            </PreviousNext>
            <img
              src={
                currentPage === lastPage ? ChevronRightDisable : ChevronRight
              }
              alt="Next"
            />
          </Pagination>
        </Container>
      </UsefulArea>

      <ModalAddTool
        visible={modalAddVisible}
        onVisibleChange={dismissModalAdd}
        onAddTool={handleIfToolWasAdded}
        onServerError={handleServerErrorOnAddingTool}
      />

      <ModalRemoveTool
        visible={modalRemoveVisible}
        onVisibleChange={dismissModalRemove}
        toolToDelete={toolToDelete}
        onDeleteTool={handleIfToolWasDeleted}
      />

      <ModalMask
        isShowed={afterLogin}
        becomingTransparent={becomingTransparent}
      />

      <CriticalBanner
        isVisible={serverIsDown}
        type="error"
        message="Server error. Please try again later"
        onDismissing={handleCloseBanner}
      />
    </>
  );
}

export default VuttrMainPage;
