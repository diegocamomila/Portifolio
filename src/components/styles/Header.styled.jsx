import styled from "styled-components"
// import styledComponents from "styled-components"

export const StyledHeader = styled.header`
  /* background-color: ${(props) => props.bg} ; */
  /* background-color: ${({ bg }) => bg} ; */
   background-color: ${({ theme }) => theme.colors.primary} ;
  padding:  40px 0;

  /* h1 {
      color: #f5f5f5;
  }
  &:hover {
      background-color: #489fb5;
  } */
`;