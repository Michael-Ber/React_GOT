import React, {Component} from 'react';
// import './randomChar.css';
import styled from 'styled-components';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4 {
        margin-bottom: 20px;
        text-align: center;
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

    render() {

        return (
            <RandomBlock>
                <h4>Random Character: John</h4>
                <UlBlock>
                    <LiItem>
                        <span className="term">Gender </span>
                        <span>male</span>
                    </LiItem>
                    <LiItem>
                        <span className="term">Born </span>
                        <span>11.03.1039</span>
                    </LiItem>
                    <LiItem>
                        <span className="term">Died </span>
                        <span>13.09.1089</span>
                    </LiItem>
                    <LiItem>
                        <span className="term">Culture </span>
                        <span>Anarchy</span>
                    </LiItem>
                </UlBlock>
            </RandomBlock>
        );
    }
}
