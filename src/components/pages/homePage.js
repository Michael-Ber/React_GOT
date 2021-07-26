import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const H2Block = styled.h2`
    text-align: center;
    color: #fff;
`;

const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    margin-top: 200px;
`;

const HomeItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
`;

const HomeTitle = styled(Link)`
    font-size: 18spx;
    color: #fff;
    text-decoration: none;
    margin-bottom: 10px;
    :visited {
        text-decoration: none;
        color: #fff;
    }
    :hover {
        text-decoration: underline;
        color: #fff;
    }
    :focus {
        text-decoration: none;
        color: #fff;
    }
    :active {
        text-decoration: none;
        color: #fff;
    }
`;

const HomeImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
`;

const HomeContent = styled.span`
    text-align: center;
    font-size: 14px;
    color: #fff;
    margin-top: 10px;
`;

export default class HomePage extends Component {
render () {
    return (
        <div className="app__homepage">
            <H2Block>This is start page of the Game Of Throne</H2Block>
            <H2Block style={{'marginTop': '50px'}}>Here you can find information about: </H2Block>
            <HomeContainer>
                <HomeItem>
                    <HomeTitle to="/characters/">Characters</HomeTitle>
                    <HomeImg src="../img/chars.png"/>
                    <HomeContent>Characters content</HomeContent>
                </HomeItem>
                <HomeItem>
                    <HomeTitle to="/books/">Books</HomeTitle>
                    <HomeImg src="../img/books.jpg"/>
                    <HomeContent>Books content</HomeContent>
                </HomeItem>
                <HomeItem>
                    <HomeTitle to="/houses/">Houses</HomeTitle>
                    <HomeImg src="../img/houses.jpg"/>
                    <HomeContent>Houses content</HomeContent>
                </HomeItem>
            </HomeContainer>
        </div>
    )
}
}