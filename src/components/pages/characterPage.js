import React from 'react';
import {ItemListChars} from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class CharacterPage extends React.Component {
    gotService = new GotService();

    state = {
        charSelected: null,
        error: false
    }
    selectChar=(id)=> {
        this.setState(() => {
            return {
                charSelected: id
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
            <ItemListChars 
                selectItem={this.selectChar}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        );
        const itemDetails = (
            <ItemDetails 
                selectedItem={this.state.charSelected}
                getData={this.gotService.getCharacter}>
                <Field field="gender" label="Gender"/>
                <Field field="born" label="Born" />
                <Field field="died" label="Died"/>
                <Field field="culture" label="Culture" />
            </ItemDetails>
        );
        return (
            <RowBlock left={itemList} right={itemDetails}></RowBlock>
        )
    }
}