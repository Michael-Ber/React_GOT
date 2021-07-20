import React, {Component} from 'react';
// import './charDetails.css';
import styled from 'styled-components';
import GotService from '../../services/gotService';
import Spinner from '../spinner';


const DetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const UlBlock = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`;
const LiItem = styled.li`
    display: flex !important;
    justify-content: space-between !important;
    position: relative;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-right-width: 0;
    border-left-width: 0;
    border-radius: 0;
    :first-child {
        border-top-width: 0;
    }

`;

const Field = ({char, field, label}) => {
    return (
        <LiItem >
            <span className="term">{label}</span>
            <span>{char[field]}</span>
        </LiItem>
    )
}

export { Field };

export default class CharDetails extends Component {
    gotService = new GotService();
    state = {
        char: null,
        loading: false
    }
    componentDidMount() {
        this.updateChar();
        
    }
    componentDidUpdate(prevProps) {
        if(this.props.selectedChar !== prevProps.selectedChar) {
            this.updateChar();
        }
    }
    updateChar() {
        const {selectedChar} = this.props;
        if(!selectedChar) {
            return
        }
        this.setState({loading: true});
        this.gotService.getCharacter(selectedChar, this.state.loading)
            .then((char) => this.setState({char}))
            .then(() => this.setState({loading: false}))
    }
    checkIfLoading(char, loading) {
        if(loading) {
            return <Spinner></Spinner>
        }
        return char;
    }
    render() {
        if(!this.state.char) {
            return (
                <span style={{'color': '#fff'}}>You should choose a person</span>
            )
        }
        
        const {name} = this.state.char;
        const {loading, char} = this.state;
        return (
            
            <DetailsBlock >
                <h4>{this.checkIfLoading(name, loading)}</h4>
                <UlBlock className="list-group-flush">
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {char})
                    })}
                    {/* <LiItem >
                        <span className="term">Gender</span>
                        <span>{this.checkIfLoading(gender, loading)}</span>
                    </LiItem>
                    <LiItem>
                        <span className="term">Born</span>
                        <span>{this.checkIfLoading(born, loading)}</span>
                    </LiItem>
                    <LiItem>
                        <span className="term">Died</span>
                        <span>{this.checkIfLoading(died, loading)}</span>
                    </LiItem>
                    <LiItem>
                        <span className="term">Culture</span>
                        <span>{this.checkIfLoading(culture, loading)}</span>
                    </LiItem> */}
                </UlBlock>
            </DetailsBlock>
        );
    }
}