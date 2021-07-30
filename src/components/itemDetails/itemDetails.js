import React, {useState, useEffect} from 'react';
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



function ItemDetails ({selectedItem, getData, children}) {
    
    const [item, refreshData] = useState(null);
    const [loadingState, updateLoading] = useState([false]);
    
    useEffect (() => {
        console.log(selectedItem);
        updateItem(selectedItem);
        return () => {
            updateItem(selectedItem);
        }
    }, []);

    function updateItem(selectedItem) {
        console.log(selectedItem);
        if(!selectedItem) {
            return
        }
        updateLoading(loadingState => loadingState=true);
        getData(selectedItem)
            .then(item => refreshData(item))
            .then(updateLoading(loadingState => loadingState=false))
            
    }
    function checkIfLoading(item, loadingState) {
        if(loadingState) {
            return <Spinner></Spinner>
        }
        return item;
    }
    console.log(item);
    if(!item) {
        return (
            <span style={{'color': '#fff'}}>You should choose a person</span>
        )
    }
    
    return (
        <DetailsBlock >
            
            <h4>{checkIfLoading(item.name, loadingState)}</h4>
            <UlBlock className="list-group-flush">
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {item, loadingState})
                })}
            </UlBlock>
            
        </DetailsBlock>
        
    );
    
}
export default ItemDetails;

const Field = ({item, loading, field, label}) => {
    let released; // remove T00:00:00 from date released
    field === 'released' ? released = String(item[field].match(/[0-9]*-[0-9]*-[0-9]*/ig)) : field === 'titles' ? (item[field].length > 1 ? released = item[field].join(', ') : released = item[field]) : released = item[field];
     
    const content = loading ? <Spinner></Spinner> : released; // want full date, instead of release put item[field]
    console.log(item);
    return (
        <LiItem >
            <span className="term">{label}</span>
            <span>{content}</span>
        </LiItem>
    )
}

export { Field };