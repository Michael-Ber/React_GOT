import React, {Component} from 'react';
// import './itemList.css';
import styled from 'styled-components';
import '../../services/gotService';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

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
    gotService = new GotService();
    state = {
        chars: null, 
        pageNum: 16,
        pageSize: 10,
        error: false
    };
    
    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((chars) => {
                return this.setState({chars})
            })
    }
    componentDidCatch() {
        this.setState({error: true})
    }
    render() {
        if(this.state.error) {
            return <ErrorMessage></ErrorMessage>
        }
        if(!this.state.chars) {
            return (
                <Spinner></Spinner>
            )
        }
        const {selectChar} = this.props;
        const persons = this.state.chars.map(item => {
            return <LiItem 
                        key={item.id}
                        onClick={() => selectChar(item.id)}>{item.name}</LiItem>
        })
        return (
            <UlBlock >
                {persons}
            </UlBlock>
        );
    }
}