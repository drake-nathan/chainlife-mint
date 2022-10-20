import styled from 'styled-components';

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 185px;
  position: absolute;
  top: 85px;
  right: 50px;
  background-color: ${(props) => props.theme.colors.textMain};
  border: 3px solid ${(props) => props.theme.colors.textMain};
  overflow: hidden;
  z-index: 40;

  #coinbase {
    border-bottom: none;
  }
  #metamask {
    border-bottom: none;
  }
`;

export const MsgDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const CloseModalArrow = styled.button`
  color: ${(props) => props.theme.colors.bgMain};
  :hover {
    color: ${(props) => props.theme.colors.textMain};
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  max-width: 25ch;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  max-width: 30ch;
  text-align: center;
  line-height: 1.5;

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const XButton = styled.img`
  width: 1.25em;
  cursor: pointer;
`;

export const ModalBackground = styled.div`
  height: 150vh;
  width: 100%;
  position: absolute;
  z-index: 30;
  background: rgba(0, 0, 0, 0.6);
  color: pink;
  backdrop-filter: blur(4px);
  cursor: pointer;

  @media (max-width: 500px) {
    height: 200vh;
  }
`;

export const TopButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid ${(props) => props.theme.colors.bgMain};
  width: 185px;
  color: ${(props) => props.theme.colors.bgMain};
  background: ${(props) => props.theme.colors.textMain};
  font-size: 28px;
  padding-left: 0.35em;
  font-weight: 500;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  justify-content: flex-end;
  text-align: end;
  outline: none;
  align-items: center;
  min-height: 45px;
  border-left: 3px solid ${(props) => props.theme.colors.textMain};
  border-right: 3px solid ${(props) => props.theme.colors.textMain};
  border-top: 3px solid ${(props) => props.theme.colors.textMain};
  border-bottom: 3px solid ${(props) => props.theme.colors.bgMain};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.bgMain};
  background: ${(props) => props.theme.colors.textMain};
  font-size: 18px;
  font-weight: 500;
  padding: 0 0.5em;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.textMain};
    background-color: ${(props) => props.theme.colors.bgMain};
  }

  @media (max-width: 500px) {
    min-width: 150px;
  }
`;
