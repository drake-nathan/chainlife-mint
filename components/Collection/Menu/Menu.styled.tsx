import styled from 'styled-components';
import { CgSortZa, CgSortAz } from 'react-icons/cg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding: 1em 3em;
  gap: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1em;
    gap: 2em;
  }
`;

export const StatsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;

  @media (max-width: 768px) {
    margin: 0 1em;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    gap: 1em;
  }

  @media (max-width: 768px) {
    gap: 1.5em;
  }
`;

export const SortDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75em;

  .inactive {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textOffset};
  }

  .icon {
    font-size: 2.125rem;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 1.875rem;
    }
  }

  /* @media (max-width: 768px) {
    margin: 0 1em;
  } */

  @media (max-width: 400px) {
    gap: 0.5em;
  }
`;

export const Title = styled.h2`
  /* font-size: 1.5rem; */
  margin-bottom: 0.5em;
`;

export const Stat = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
`;

export const SubtleText = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textOffset};
`;

export const SortText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;

  @media (max-width: 400px) {
    font-size: 1.125rem;
  }
`;

export const TextButton = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.textMain};
    font-weight: 600;
  }

  @media (max-width: 400px) {
    font-size: 1.125rem;
  }
`;

export const SortButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em;
  margin-left: -0.25em;

  :hover {
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
`;

export const SortIconAsc = styled(CgSortZa)``;

export const SortIconDesc = styled(CgSortAz)``;
