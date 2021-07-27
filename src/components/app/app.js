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
        error: false,
        pageNotFound: false
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
    onChangeImg = () => {
        this.setState((state) => {
            return {
                pageNotFound: !state.pageNotFound
            }
        })
    }
    
    render() {
        if(this.state.error) {
            return <ErrorMessage></ErrorMessage>
        }
        const randomChar = this.state.randCharVis ? <RandomChar></RandomChar>: null;
        const randomCharComponent = 
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                    {randomChar}
                    <button 
                        className={'toggle__button'}
                        onClick={this.onClick}>Toggle random character</button>
                </Col>
            </Row>;
        const imgOnMainScreen = this.state.pageNotFound ? 'appNotFound' : 'app';

        return (
            <Router>
                <div className = {imgOnMainScreen}> 
                    <Container>
                        <Switch>
                            <Route path="/characters" exact><Header />{randomCharComponent}<CharacterPage/></Route>
                            <Route path="/houses" exact><Header />{randomCharComponent}<HousesPage/></Route>
                            <Route path="/books" exact><Header />{randomCharComponent}<BooksPage/></Route>
                            <Route path="/books/:id" exact render={({match}) => {
                                const {id} = match.params;
                                return (<><Header />{randomCharComponent}<BookItem bookId={id}/></>)
                            }}/>
                            <Route path="/" exact>
                                <Header />
                                <HomePage/>
                            </Route>
                            <Route exact> 
                                <Header onChangeImg={this.onChangeImg}/>
                                <NotFound onChangeImg={this.onChangeImg}/>
                            </Route>
                        </Switch>
                    </Container>
                    
                </div>
            </Router>
        );
    }
    
};
