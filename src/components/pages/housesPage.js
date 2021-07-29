import React from 'react';
import {ItemListHouses} from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousesPage extends React.Component {
    gotService = new GotService();

    state = {
        houseSelected: null,
        error: false
    }
    selectHouse=(id)=> {
        this.setState(() => {
            return {
                houseSelected: id
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
            <ItemListHouses 
                selectItem={this.selectHouse}
                renderItem={({name}) => name}/>
        );
        const itemDetails = (
            <ItemDetails 
                selectedItem={this.state.houseSelected}
                getData={this.gotService.getHouse}>
                <Field field="region" label="Region"/>
                <Field field="words" label="Words" />
                <Field field="titles" label="Titles"/>
                <Field field="overlord" label="Overlord" />
                <Field field="ancestralWeapons" label="AncWeapons"/>
            </ItemDetails>
        );
        return (
            <RowBlock left={itemList} right={itemDetails}></RowBlock>
        )
    }
}