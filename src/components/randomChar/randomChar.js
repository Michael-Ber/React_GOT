import React, {useState, useEffect} from 'react';
// import './randomChar.css';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
    img {
        display: block;
        width: 35%;
        margin: 0 auto;
    }
    span {
        display: block;
        text-align: center;
        margin-top: 20px;
    }
`;
const UlBlock = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`;
const LiItem = styled.li`
    display: flex !important;
    justify-content: space-between !important;
    position: relative;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-right-width: 0;
    border-left-width: 0;
    border-radius: 0;
    :first-child {
        border-top-width: 0;
    }

`;
function RandomChar({interval = 3000}) {
    const gotService = new GotService();
    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        updateChar();
        let timerId = setInterval(updateChar, interval);
        return () => {
            clearInterval(timerId);
        }
    }, [])

    const onCharLoaded = (char) => {
        setChar(char);
        setLoading(loading => loading=false)
    }

    const updateChar = () => {
        const id = Math.floor(Math.random()*140 + 25);
        gotService.getCharacter(id)
            .then(onCharLoaded)
            .catch(errorMessage)
    }
    function checkIfEmpty(prop, loading) {
        if(loading) {
            return <Spinner></Spinner>
        }
        if(prop === "") {
            return 'there is no data :(';
        }
        return prop;
    }
    const errorMessage = (error) => {
        setLoading(loading => loading=false)
        setError(error => error=true)
    }
    

    const errorMsg = error ? <ErrorMessage></ErrorMessage>: null;
    const content = !(error) ? <View char={char}
                                    loading={loading}
                                    checkIfEmpty={checkIfEmpty}>
                                </View> : null;
    return (
        <RandomBlock>
            {errorMsg}
            {content}
        </RandomBlock>
    );
    
}

export default RandomChar;

const View = ({char, loading, checkIfEmpty}) => {
    const {name, gender, born, died, culture} = char;
    return (
        <>
            <h4>Random Character: {checkIfEmpty(name, loading)}</h4>
            <UlBlock>
                <LiItem>
                    <span className="term">Gender </span>
                    <span>{checkIfEmpty(gender, loading)}</span>
                </LiItem>
                <LiItem>
                    <span className="term">Born </span>
                    <span>{checkIfEmpty(born, loading)}</span>
                </LiItem>
                <LiItem>
                    <span className="term">Died </span>
                    <span>{checkIfEmpty(died, loading)}</span>
                </LiItem>
                <LiItem>
                    <span className="term">Culture </span>
                    <span>{checkIfEmpty(culture, loading)}</span>
                </LiItem>
            </UlBlock>
        </>
    )
}
