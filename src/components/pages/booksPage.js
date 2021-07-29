import React from 'react';
import {ItemListBooks} from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import {withRouter} from 'react-router-dom';

class BooksPage extends React.Component {
    gotService = new GotService();

    state = {
        error: false
    }
 
    componentDidCatch() {
        this.setState({error: true})
    }
    render() {
        if(this.state.error) {
            return <ErrorMessage></ErrorMessage>
        }
        
        return (
            <ItemListBooks 
                selectItem={(itemId) => {
                    this.props.history.push(itemId)
                }}
                renderItem={({name}) => name}/>
        )
    }
}

export default withRouter(BooksPage);