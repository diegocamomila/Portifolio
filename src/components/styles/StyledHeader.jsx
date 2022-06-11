import styled from "styled-components"

export const StyledHeader = styled.header`
  /* background-color: ${(props) => props.bg} ; */
  /* background-color: ${({ bg }) => bg} ; */
    background-color: ${({ theme }) => theme.colors.primary} ;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
    padding:  1.5rem 0;

    ul {
        display: flex;
        flex-wrap: wrap;            
    }    

    a {
        margin-left: 1.5rem;
   }


`;