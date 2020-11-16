import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

const Game = (props) => {
    return(
        <SyledGame>
            <h3>{props.name}</h3>
            <p>{props.releaseDate}</p>
            <img src={props.image} alt={props.name}/>
        </SyledGame>
    
    )
}

const SyledGame = styled(motion.div)`
    min-height: 40vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 15px;
    overflow: hidden;
    img {
        height: 30vh;
        object-fit: cover;
        width: 100%;
    }
`

export default Game;