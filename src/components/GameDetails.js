import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resizeImage } from '../util';

const GameDetails = (props) => {
    const { details, screenshots, isLoading} = useSelector(state => state.game);
    const history = useHistory();

    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    }
    return(
        <>
            {!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <DetailsCard layoutId={props.pathId}>
                    <Stats>
                        <Rating>
                            <motion.h3 layoutId={`title ${props.pathId}`}>{details.name}</motion.h3>
                            <p>rating: {details.rating}</p>
                        </Rating>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {details.platforms.map(data => {
                                    return <h3 key={data.platform.id}>{data.platform.name}</h3>
                                })}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <motion.img layoutId={`image ${props.pathId}`} src={resizeImage(details.background_image, 1280)} alt={`${details.name}`}/>
                    </Media>
                    <Description dangerouslySetInnerHTML={{__html: details.description}} />
                    <Gallery>
                        {screenshots.map(screenshot => {
                            return <img key={screenshot.id} src={resizeImage(screenshot.image, 420)} alt={`${details.name}`}/>
                        })}  
                    </Gallery>
                </DetailsCard>
            </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
        background-color: white;
    }
    &::-webkit-scrollbar-thumb {
        background-color: salmon;
    }
`

const DetailsCard = styled(motion.div)`
    width: 80%;
    background: white;
    border-radius: 15px;
    position: absolute;
    left: 10%;
    color: black;
    padding: 2rem 5rem;
    z-index: 10;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Rating = styled(motion.div)`
    h3 {
        padding: 0.5rem;
    }
    p {
        padding: 0.5rem;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: center;
    img {
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`

const Description = styled(motion.div)`
    margin-top: 5rem;
    font-size: 20px;
`

const Gallery = styled(motion.div)`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 1rem;
    row-gap: 1rem;
    img {
        width: 100%;
        flex-wrap: wrap;
    }
`

export default GameDetails;