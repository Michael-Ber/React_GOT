import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import '../../services/gotService';
import './app.css';

import GotService from '../../services/gotService';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class App extends Component {
    gotService = new GotService();
    state = {
        randCharVis: true,
        error: false
    }
    componentDidCatch() {
        this.setState({error: true})
    }
    onClick = () => {
        this.setState((state) => {
            return {
                randCharVis: !state.randCharVis
            }
        }) 
    }
    
    render() {
        if(this.state.error) {
            return <ErrorMessage></ErrorMessage>
        }
        const randomChar = this.state.randCharVis ? <RandomChar></RandomChar>: null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <button 
                                className={'toggle__button'}
                                onClick={this.onClick}>Toggle random character</button>
                        </Col>
                    </Row>
                    <CharacterPage></CharacterPage>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                selectItem={this.selectChar}
                                getData={this.gotService.getAllBooks}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails selectedChar={this.state.charSelected}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                                selectItem={this.selectChar}
                                getData={this.gotService.getAllHouses}
                                renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails selectedChar={this.state.charSelected}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
    
};
