import React, {Component} from 'react';
// import './charDetails.css';
import styled from 'styled-components';
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

const Field = ({item, loading, field, label}) => {
    let released; // remove T00:00:00 from date released
    field === 'released' ? released = String(item[field].match(/[0-9]*-[0-9]*-[0-9]*/ig)) : field === 'titles' ? (item[field].length > 1 ? released = item[field].join(', ') : released = item[field]) : released = item[field];
     
    const content = loading ? <Spinner></Spinner> : released; // want full date, instead of release put item[field]
    return (
        <LiItem >
            <span className="term">{label}</span>
            <span>{content}</span>
        </LiItem>
    )
}

export { Field };

export default class ItemDetails extends Component {
    state = {
        item: null,
        loading: false
    }
    componentDidMount() {
        this.updateItem();
        
    }
    componentDidUpdate(prevProps) {
        if(this.props.selectedItem !== prevProps.selectedItem) {
            this.updateItem();
        }
    }
    updateItem() {
        const {selectedItem, getData} = this.props;
        if(!selectedItem) {
            return
        }
        this.setState({loading: true});
        getData(selectedItem)
            .then((item) => this.setState({item}))
            .then(() => this.setState({loading: false}))
    }
    checkIfLoading(item, loading) {
        if(loading) {
            return <Spinner></Spinner>
        }
        return item;
    }
    render() {
        if(!this.state.item) {
            return (
                <span style={{'color': '#fff'}}>You should choose a person</span>
            )
        }
        const {name} = this.state.item;
        const {loading, item} = this.state;
        return (
            
            
            <DetailsBlock >
                
                <h4>{this.checkIfLoading(name, loading)}</h4>
                <UlBlock className="list-group-flush">
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item, loading})
                    })}
                </UlBlock>
                
            </DetailsBlock>
            
        );
    }
}