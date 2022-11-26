import styled from 'styled-components';

export const NavLinksDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const NavItem = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textMain};

  :hover {
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
`;
