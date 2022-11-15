import styled from 'styled-components';

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  background: rgba(244, 245, 240, 0.7);
  backdrop-filter: blur(4px);
  cursor: pointer;

  @media (max-width: 500px) {
    height: 200vh;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.bgMain};
  border: 3px solid ${(props) => props.theme.colors.textMain};
  padding: 1.75em 1.5em;
  z-index: 40;
  min-width: 300px;
`;

export const CenterModalContainer = styled(ModalContainer)`
  align-items: center;
  justify-content: center;
`;

export const SuccessModalContainer = styled(ModalContainer)`
  padding: 2.5em 2em;
  gap: 2.5em;
`;

export const SuccessSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

export const MsgDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const UnitDiv = styled(MsgDiv)`
  justify-content: center;
`;

export const LinkDiv = styled(MsgDiv)`
  justify-content: center;
  align-items: center;
  gap: 1.5em;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  margin-right: -8px;
  margin-top: 34px;
  line-height: 1.5;
  max-width: 25ch;
  @media (max-width: 500px) {
    margin-top: 18px;
  }
`;

export const SuccessText = styled.span`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  max-width: 30ch;
  text-align: center;
  line-height: 1.5;
  text-decoration: underline;

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 175px;
  min-height: 65px;
  border: 3px solid ${(props) => props.theme.colors.textMain};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0 0.5em;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.bgMain};
  }

  @media (max-width: 500px) {
    min-width: 150px;
  }
`;

export const CenterButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const XButton = styled.img`
  color: ${(props) => props.theme.colors.textMain};
  width: 1.25em;
  margin-top: -4px;
  cursor: pointer;
`;

export const LittleButtonDiv = styled.div`
  display: flex;
  gap: 2em;
`;

export const LittleButton = styled(Button)`
  min-width: 120px;
`;

export const PlusMinusDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const PlusMinusButton = styled(Button)`
  min-width: 55px;
  min-height: 55px;
  font-size: 30px;

  :disabled {
    color: ${(props) => props.theme.colors.textOffset};
    border-color: ${(props) => props.theme.colors.textOffset};

    :hover {
      background: none;
    }
  }
`;

export const SubtleText = styled.span`
  color: ${(props) => props.theme.colors.textOffset};
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;

export const UnitText = styled(Text)`
  color: ${(props) => props.theme.colors.hover};
`;

export const Input = styled.input`
  min-height: 65px;
  min-width: 400px;
  padding: 0.5em;
  border: 3px solid ${(props) => props.theme.colors.textOffset};
  outline: none;
  border-radius: ${(props) => props.theme.borderRadius};
  text-align: left;
  font-size: 1.25rem;

  @media (max-width: 850px) {
    min-width: 80%;
  }

  @media (max-width: 500px) {
    height: 65px;
    width: 100%;
    text-align: center;
  }

  :focus::placeholder {
    color: transparent;
  }
`;
