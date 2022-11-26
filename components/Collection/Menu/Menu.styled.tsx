import styled from 'styled-components';
import { CgSortZa, CgSortAz } from 'react-icons/cg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em 3em;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1em;
    gap: 2em;
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

  .icon {
    font-size: 2.125rem;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    gap: 0.5em;
  }
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 600;
`;

export const SortText = styled(Text)`
  @media (max-width: 400px) {
    font-size: 1.125rem;
  }
`;

export const SubtleText = styled(SortText)`
  color: ${(props) => props.theme.colors.textOffset};
  font-weight: 500;
`;

export const TextButton = styled(SortText)`
  cursor: pointer;
`;

export const SortIconAsc = styled(CgSortZa)``;

export const SortIconDesc = styled(CgSortAz)``;
