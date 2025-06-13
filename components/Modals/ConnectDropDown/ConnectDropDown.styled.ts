import styled from "styled-components";

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 175px;
  position: absolute;
  top: 75px;
  right: 48px;
  gap: 0.25em;
  background-color: ${(props) => props.theme.colors.bgMain};
`;

export const TopButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 175px;
  color: ${(props) => props.theme.colors.bgMain};
  background: ${(props) => props.theme.colors.textMain};
  font-size: 28px;
  padding-left: 0.35em;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 500px) {
  }

  &:hover {
    border: none;
    background: ${(props) => props.theme.colors.bgMain};
    color: ${(props) => props.theme.colors.textMain};
  }

  .up-arrow {
    margin-left: 4px;
    border: none;
    background: inherit;
    color: inherit;
    @media (max-width: 500px) {
      padding: 0px;
      min-width: 25px;
    }
  }

  button {
    border: none;
    background: inherit;
    color: inherit;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  text-align: end;
  outline: none;
  align-items: center;
  min-height: 45px;
  color: ${(props) => props.theme.colors.bgMain};
  background: ${(props) => props.theme.colors.textMain};
  font-size: 18px;
  font-weight: 500;
  padding: 0 0.5em;
  cursor: pointer;

  :hover {
    border: none;
    background-color: ${(props) => props.theme.colors.bgMain};
    color: ${(props) => props.theme.colors.textMain};
  }

  @media (max-width: 500px) {
    min-width: 125px;
  }
`;
