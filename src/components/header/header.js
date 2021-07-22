import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './header.css';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
    
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
        
    }
`;
const LinkItem = styled(Link)`
    color: inherit;
    text-decoration: none;
    :visited {
        text-decoration: none;
        color: inherit;
    }
    :hover {
        text-decoration: none;
        color: inherit;
    }
    :focus {
        text-decoration: none;
        color: inherit;
    }
    :active {
        text-decoration: none;
        color: inherit;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <LinkItem to="/">Game of Thrones DB</LinkItem>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <LinkItem to="/characters">Characters</LinkItem>
                </li>
                <li>
                    <LinkItem to="/houses">Houses</LinkItem>
                </li>
                <li>
                    <LinkItem to="/books">Books</LinkItem>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;