import React from 'react';
import styled from 'styled-components';

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
const Link = styled.a`
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
                <Link href="#">
                Game of Thrones DB
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <Link href="#">Characters</Link>
                </li>
                <li>
                    <Link href="#">Houses</Link>
                </li>
                <li>
                    <Link href="#">Books</Link>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;