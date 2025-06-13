import styled from "styled-components";

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
    border: none;
    background: ${(props) => props.theme.colors.bgMain};
    color: ${(props) => props.theme.colors.textMain};
  }

  .up-arrow {
    margin-right: 12px;
    border: none;
    background: inherit;
    min-width: 25px;
    color: inherit;
  }

  button {
    border: none;
    background: inherit;
    color: inherit;
  }

  #opensea {
    margin-left: -8px;
    width: 100%;
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
    border: none;
    background-color: ${(props) => props.theme.colors.bgMain};
    color: ${(props) => props.theme.colors.textMain};
  }

  @media (max-width: 500px) {
    min-width: 125px;
  }
`;
