import React, {Component} from 'react';
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
export default class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar();
    }
    gotService = new GotService();
    state = {
        char: {},
        loading: true,
        error: false
    };
    onCharLoaded = (char) => {
        this.setState({char, loading: false});
    }
    updateChar() {
        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.errorMessage)
    }
    checkIfEmpty(prop, loading) {
        if(loading) {
            return <Spinner></Spinner>
        }
        if(prop === "") {
            return 'there is no data :(';
        }
        return prop;
    }
    errorMessage = (error) => {
        this.setState({
            loading: false,
            error: true
        })
    }
    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage></ErrorMessage>: null;
        const content = !(error) ? <View char={char}
        loading={loading}
        checkIfEmpty={this.checkIfEmpty}></View> : null;
        return (
            <RandomBlock>
                {errorMessage}
                {content}
            </RandomBlock>
        );
    }
}

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
