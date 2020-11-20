import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import logo from '../images/gamepad.svg';
import { loadSearched } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const textInputHandler = (e) => {
        setTextInput(e.target.value);
    }
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(loadSearched(textInput));
    }

    return(
        <StyledNav>
            <Logo>
                <img src={logo} alt="Logo"/>
                <h3>Moody Gamer</h3>
            </Logo>
            <form className="search">
                <input onChange={textInputHandler} value={textInput} type="text"/>
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        outline: none;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
    button {
        font-size: 1.5rem;
        padding: 0.5rem;
        background-color: #fa8072;
        color: white;
        border: none;
        outline: none;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
`;

const Logo = styled(motion.div)`
    img {
        width: 120px;
    }
`;

export default Nav;