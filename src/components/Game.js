import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { loadDetails } from '../actions/gameDetailsAction';
import { Link } from 'react-router-dom';
import { resizeImage } from '../util';

const Game = (props) => {
    const dispatch = useDispatch();
    const stringPathId = (props.id).toString();
    const loadDetailsHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetails(props.id));
    }

    return(
        <SyledGame layoutId={stringPathId} onClick={loadDetailsHandler}>
            <Link to={`/game/${props.id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{props.name}</motion.h3>
                <p>{props.releaseDate}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={resizeImage(props.image, 640)} alt={props.name}/>
            </Link> 
        </SyledGame>
    
    )
}

const SyledGame = styled(motion.div)`
    height: 50vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
    img {
        display: block;
        height: 40vh;
        object-fit: cover;
        width: 100%;
    }
`

export default Game;