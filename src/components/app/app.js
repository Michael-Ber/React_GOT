import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import '../../services/gotService';
import './app.css';


export default class App extends Component {
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
                </Container>
            </>
        );
    }
    
};
