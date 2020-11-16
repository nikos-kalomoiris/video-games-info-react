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
`;

export default GlobalStyles;