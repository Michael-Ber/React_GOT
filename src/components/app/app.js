import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import '../../services/gotService';
import './app.css';


export default class App extends Component {
    state = {
        d: true
    }
    onClick = () => {
        if(this.state.d) {
            this.setState({d: false})
        }else {
            this.setState({d: true})
        }
    }
    
    render() {
        const randomChar = this.state.d ? <RandomChar></RandomChar>: null;
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
                                onClick={this.onClick}>toggleRandomChar</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
    
};
