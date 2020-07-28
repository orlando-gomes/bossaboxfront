import React from 'react';
import Select from 'react-select';

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
} from './styles';
import iconAddWhite from '~/assets/Icon-Add-white-2px.svg';
import iconClose from '~/assets/Icon-Close-2px.svg';
import ChevronLeftDisable from '~/assets/Chevron-Left-disable.svg';
import ChevronRight from '~/assets/Chevron-Right.svg';

function FakeBackground() {
  const tools = [1, 2, 3];

  return (
    <UsefulArea>
      <Container>
        <AppName>VUTTR</AppName>
        <SubName>Very Useful Tools to Remember</SubName>

        <Controls>
          <SelectAndCheckbox>
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              placeholder="Select a tag"
            />

            <input type="checkbox" name="bytags" value="bytags" />
            <span>search in tag only</span>
          </SelectAndCheckbox>
          <ButtonAdd>
            <img src={iconAddWhite} alt="add" />
            <ButtonAddText>Add</ButtonAddText>
          </ButtonAdd>
        </Controls>

        <ListTool>
          {tools.map((tool) => (
            <CardTool key={tool}>
              <TitleAndButton>
                <ToolTitle>Notion</ToolTitle>
                <ButtonRemove>
                  <img src={iconClose} alt="remove" />
                  <ButtonRemoveText>Remove</ButtonRemoveText>
                </ButtonRemove>
              </TitleAndButton>

              <ToolDescription>
                All in one tool to organize teams and ideas. Write, plan,
                collaborate and get organized.
              </ToolDescription>
              <TagList>
                <Tag>#organization</Tag>
                <Tag>#planning</Tag>
                <Tag>#collaboration</Tag>
                <Tag>#writing</Tag>
                <Tag>#calendar</Tag>
                <Tag highlighted>#node</Tag>
              </TagList>
            </CardTool>
          ))}
        </ListTool>

        <Pagination>
          <img src={ChevronLeftDisable} alt="Previous" />
          <PreviousNext disable>Previous</PreviousNext>
          <Page active>1</Page>
          <Page>2</Page>
          <Page>3</Page>
          <Page>4</Page>
          <PreviousNext>Next</PreviousNext>
          <img src={ChevronRight} alt="Next" />
        </Pagination>
      </Container>
    </UsefulArea>
  );
}

export default FakeBackground;
