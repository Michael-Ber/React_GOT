import React from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends React.Component {
    state = {
        charSelected: null,
        error: false
    }
    selectChar=(id)=> {
        console.log(id);
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
        return (
            <Row>
                <Col md='6'>
                    <ItemList selectChar={this.selectChar}/>
                </Col>
                <Col md='6'>
                    <CharDetails selectedChar={this.state.charSelected}/>
                </Col>
            </Row>
        )
    }
}