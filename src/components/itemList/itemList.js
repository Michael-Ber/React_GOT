import React, {Component} from 'react';
// import './itemList.css';
import styled from 'styled-components';

const UlBlock = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-botoom: 0;
    cursor: pointer;
`;
const LiItem = styled.li`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;
    :first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
`;
export default class ItemList extends Component {

    render() {
        return (
            <UlBlock >
                <LiItem >
                    John Snow
                </LiItem>
                <LiItem >
                    Brandon Stark
                </LiItem>
                <LiItem >
                    Geremy
                </LiItem>
            </UlBlock>
        );
    }
}