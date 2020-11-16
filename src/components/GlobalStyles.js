import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
    }
    body {
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h3 {
        font-size: 1.3rem;
        padding: 1rem;
    }
    p {
        padding: 0.5rem;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;