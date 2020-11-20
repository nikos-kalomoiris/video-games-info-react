import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const pathId = location.pathname.split('/')[2];

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { popular, upcoming, newGames, searched } = useSelector(state => state.games);
    return(
        <GameList>
            <AnimateSharedLayout type="crossfade">
            <AnimatePresence>{ pathId && <GameDetails pathId={pathId}/> }</AnimatePresence>
            {searched.length ? (
                <div>
                    <h2>Search Results</h2>
                    <Games>
                        {searched.map((game) => {
                            return <Game id={game.id} key={game.id} name={game.name} releaseDate={game.released} image={game.background_image}/>
                        })}
                    </Games>
                </div>
            ): ""}
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game) => {
                    return <Game id={game.id} key={game.id} name={game.name} releaseDate={game.released} image={game.background_image}/>
                })}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((game) => {
                    return <Game id={game.id} key={game.id} name={game.name} releaseDate={game.released} image={game.background_image}/>
                })}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map((game) => {
                    return <Game id={game.id} key={game.id} name={game.name} releaseDate={game.released} image={game.background_image}/>
                })}
            </Games>
            </AnimateSharedLayout>
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

export default Home;