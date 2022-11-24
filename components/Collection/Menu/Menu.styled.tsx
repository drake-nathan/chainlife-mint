import styled from 'styled-components';
import { CgSortZa, CgSortAz } from 'react-icons/cg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em 3em;

  @media (max-width: 1300px) {
    margin-top: 3em;
  }

  @media (max-width: 800px) {
    margin-top: 4em;
  }

  @media (max-width: 500px) {
    margin-top: 5em;
  }
`;

export const SortDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75em;

  .inactive {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textOffset};
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 600;
`;

export const SubtleText = styled(Text)`
  color: ${(props) => props.theme.colors.textOffset};
  font-weight: 500;
`;

export const TextButton = styled(Text)`
  cursor: pointer;
`;

export const SortIconAsc = styled(CgSortZa)`
  font-size: 2.125rem;
  cursor: pointer;
`;

export const SortIconDesc = styled(CgSortAz)`
  font-size: 2.125rem;
  cursor: pointer;
`;
