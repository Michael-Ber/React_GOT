import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, HousesPage, BooksPage, BookItem, HomePage, NotFound} from '../pages';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
                    
                    <Switch>
                        <Route path="/home/" exact>
                            <Container>
                                <Header />
                                <HomePage/>
                            </Container>
                        </Route>
                        <Route path="/">
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
                                    <Route path="/houses" component={HousesPage}/>
                                    <Route path="/books" exact component={BooksPage}/>
                                    <Route path="/books/:id" render={({match}) => {
                                        const {id} = match.params;
                                        return <BookItem bookId={id}/>
                                    }}/>
                                    <Route path="/" render={({match}) => {
                                        if(!match) {
                                            return <NotFound>hjfghf</NotFound>
                                        }
                                    }}/>
                                
                                
                            </Container>
                        </Route>

                    </Switch>
                    
                </div>
            </Router>
        );
    }
    
};
