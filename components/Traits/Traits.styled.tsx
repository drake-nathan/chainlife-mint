import styled from 'styled-components';
import { SectionTitleContainer } from 'components/DescriptionSections/Description.styled';
import { Title } from '../TokenForm/TokenForms.styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const TableWrapper = styled.div`
  max-height: 360px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    max-height: 500px;
  }
`;

export const TitleDiv = styled(SectionTitleContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  height: 75px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.textOffset};

  .inactive {
    color: ${(props) => props.theme.colors.textOffset};
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const NewTitle = styled(Title)`
  font-weight: 500;
`;

export const SubTitleDiv = styled(TitleDiv)`
  border-bottom: none;

  @media (max-width: 500px) {
    margin-top: -20px;
  }
`;

export const SubTitle = styled(Title)`
  font-size: 24px;
  font-weight: 400;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 652px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const TableBody = styled.div``;

export const Header = styled.h3`
  border-right: 3px solid ${(props) => props.theme.colors.bgMain};
  width: 100%;
  padding: 4px 8px;

  :last-child {
    border-right: none;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  :last-child {
    border: none;
  }

  /* :nth-child(odd) {
    background: ${(props) => props.theme.colors.textOffset};
    color: ${(props) => props.theme.colors.bgMain};
  } */
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  min-width: 323px;
  min-height: 55px;
  @media (max-width: 850px) {
    min-width: 250px;
  }
  @media (max-width: 500px) {
    min-width: 175px;
  }

  :first-child {
    border-bottom: 3px solid ${(props) => props.theme.colors.textMain};
    border-right: 3px solid ${(props) => props.theme.colors.textMain};
  }
  :last-child {
    border-bottom: 3px solid ${(props) => props.theme.colors.textMain};
  }
`;
