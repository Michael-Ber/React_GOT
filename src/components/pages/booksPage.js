import React from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class BooksPage extends React.Component {
    gotService = new GotService();

    state = {
        bookSelected: null,
        error: false
    }
    selectBook=(id)=> {
        this.setState(() => {
            return {
                bookSelected: id
            }
        })
    }
    componentDidCatch() {
        this.setState({error: true})
    }
    render() {
        if(this.state.error) {
            return <ErrorMessage></ErrorMessage>
        }
        const itemList = (
            <ItemList 
                selectItem={this.selectBook}
                getData={this.gotService.getAllBooks}
                renderItem={({name}) => name}/>
        );
        const itemDetails = (
            <ItemDetails 
                selectedItem={this.state.bookSelected}
                getData={this.gotService.getBook}>
                <Field field="numberOfPages" label="Number of pages"/>
                <Field field="publisher" label="Publisher" />
                <Field field="released" label="Released"/>
            </ItemDetails>
        );
        return (
            <RowBlock left={itemList} right={itemDetails}></RowBlock>
        )
    }
}