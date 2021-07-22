import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../pages/characterPage';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import '../../services/gotService';
import './app.css';

import GotService from '../../services/gotService';

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
            <Router>
                <div className="app"> 
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
                        <Route path="/characters" component={CharacterPage}/>
                        <Route path="/books" component={BooksPage}/>
                        <Route path="/houses" component={HousesPage}/>
                    </Container>
                </div>
            </Router>
        );
    }
    
};
