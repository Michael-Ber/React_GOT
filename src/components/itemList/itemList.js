import React, {Component} from 'react';
// import './itemList.css';
import styled from 'styled-components';
import '../../services/gotService';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

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
    static defaultProps = {
        selectItem: () => {}
    }
    static propTypes = {
        selectItem: PropTypes.func
    }
    state = {
        items: null, 
        error: false
    };
    
    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((items) => {
                return this.setState({items})
            })
    }
    componentDidCatch() {
        this.setState({error: true})
    }
    renderItems() {
        const {items} = this.state;
        const {selectItem} = this.props;
        return items.map(item => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return <LiItem 
                        key={id}
                        onClick={() => selectItem(id)}>{label}
                    </LiItem>
        })
    }
    render() {
        if(this.state.error) {
            return <ErrorMessage></ErrorMessage>
        }
        if(!this.state.items) {
            return (
                <Spinner></Spinner>
            )
        }
        
        
        return (
            <UlBlock >
                {this.renderItems()}
            </UlBlock>
        );
    }
}