import styled from 'styled-components';

export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 50px;
`;

export const SocialLinksDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  font-size: 30px;
  font-weight: 500;
`;

export const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.textMain};
`;
