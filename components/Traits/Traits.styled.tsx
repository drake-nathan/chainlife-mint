import styled from 'styled-components';

export const TableWrapper = styled.div`
  width: fit-content;
  height: 590px;
  overflow-y: scroll;
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
  min-height: 60px;
  background: ${(props) => props.theme.colors.textMain};
  color: ${(props) => props.theme.colors.bgMain};
`;

export const TableBody = styled.div`
  border: 3px solid ${(props) => props.theme.colors.textMain};
  border-bottom: none;
`;

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

  :nth-child(odd) {
    background: ${(props) => props.theme.colors.textOffset};
    color: ${(props) => props.theme.colors.bgMain};
  }
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  min-width: 323px;
  min-height: 55px;

  :first-child {
    border-bottom: 3px solid ${(props) => props.theme.colors.textMain};
    border-right: 3px solid ${(props) => props.theme.colors.textMain};
  }
  :last-child {
    border-bottom: 3px solid ${(props) => props.theme.colors.textMain};
  }
`;
