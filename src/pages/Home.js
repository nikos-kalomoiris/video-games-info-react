import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import styled from 'styled-components';
import { motion } from "framer-motion";
import Game from '../components/Game';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { popular, upcoming, newGames } = useSelector(state => state.games);
    console.log(popular);
    return(
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game) => {
                    return <Game key={game.id} name={game.name} releaseDate={game.released} image={game.background_image}/>
                })}
            </Games>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;
const Games = styled(motion.div)`
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
    img {

    }
`;

export default Home;