import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Pridi:wht@400;500&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;        
    }

    html, body, :root {
        min-height: 100%;
    }

    body {
        background: ${({ theme }) => theme.colors.primary};
        font-size: 16px;
        color: ${({ theme }) => theme.colors.color};
        font-family: 'Pridi', sans-serif;
    }
`;

export default GlobalStyles;

