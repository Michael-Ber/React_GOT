import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NotExist = styled.h3`
    color: #fff;
    text-align: center;
    margin-top: 200px;
`;
const BigMessage = styled.span`
    display: block;
    font-size: 250px;
    color: #fff;
    text-align: center;
`;
const ButtonLink = styled(Link)`
    display: block;
    margin-top: 30px;
    text-align: center;
    font-size: 18px;
    color: #007bff;
    :visited {
        text-decoration: none;
    }
    :hover {
        text-decoration: underline;
    }
    :focus {
        text-decoration: none;
    }
    :active {
        text-decoration: none;
    }
`;

export default class NotFound extends Component {
    componentDidMount() {
        this.props.onChangeImg();
    }
    render() {
        return (
        
            <div className="app__notfound">
                <NotExist>
                    Page not found :( 
                    <ButtonLink to="/" onClick={this.props.onChangeImg}>Go to home page</ButtonLink>
                </NotExist>
                <BigMessage>4 0 4</BigMessage>
            </div>
            
        )
    }
    
}