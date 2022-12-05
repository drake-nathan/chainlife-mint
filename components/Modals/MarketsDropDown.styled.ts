import styled from 'styled-components';

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 175px;
  position: absolute;
  top: 75px;
  right: 180px;
  gap: 0.25em;
  background-color: ${(props) => props.theme.colors.bgMain};
  z-index: 1;
`;

export const TopButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 175px;
  color: ${(props) => props.theme.colors.bgMain};
  background: ${(props) => props.theme.colors.textMain};
  font-size: 28px;
  padding-left: 0.35em;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.textMain};
    background: ${(props) => props.theme.colors.bgMain};
    border: none;
  }

  .up-arrow {
    color: inherit;
    background: inherit;
    border: none;
    margin-right: 12px;
    min-width: 25px;
  }

  button {
    color: inherit;
    background: inherit;
    border: none;
  }

  #opensea {
    width: 100%;
    margin-left: -8px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  text-align: start;
  outline: none;
  align-items: center;
  min-height: 45px;
  color: ${(props) => props.theme.colors.bgMain};
  background: ${(props) => props.theme.colors.textMain};
  font-size: 18px;
  font-weight: 500;
  padding: 0 0.5em;
  cursor: pointer;
  width: 175px;

  :hover {
    color: ${(props) => props.theme.colors.textMain};
    background-color: ${(props) => props.theme.colors.bgMain};
    border: none;
  }

  @media (max-width: 500px) {
    min-width: 125px;
  }
`;
