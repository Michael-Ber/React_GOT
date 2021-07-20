import React from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
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
            <ItemList 
                selectItem={this.selectChar}
                getData={this.gotService.getAllCharacters}
                renderItem={({name, gender}) => `${name} (${gender})`}/>
        );
        const charDetails = (
            <CharDetails selectedChar={this.state.charSelected}>
                <Field field="gender" label="Gender"/>
                <Field field="born" label="Born" />
                <Field field="died" label="Died"/>
                <Field field="culture" label="Culture" />
            </CharDetails>
        );
        return (
            <RowBlock left={itemList} right={charDetails}></RowBlock>
        )
    }
}