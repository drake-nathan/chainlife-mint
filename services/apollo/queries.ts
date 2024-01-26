import { gql } from "@apollo/client";

export const GET_PREMINT_OWNERS = gql`
  {
    enso: project(id: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270-34") {
      name
      tokens(first: 1000) {
        tokenId
        owner {
          id
        }
      }
    }
    focus: project(id: "0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270-181") {
      name
      tokens(first: 1000) {
        tokenId
        owner {
          id
        }
      }
    }
  }
`;
