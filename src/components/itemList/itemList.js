import React from 'react';
import styled from 'styled-components';
import '../../services/gotService';
// import GotService from '../../services/gotService';
// import withData from '../withData';
// import Spinner from '../spinner';
// import ErrorMessage from '../errorMessage';
// import PropTypes from 'prop-types';

const UlBlock = styled.ul`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-botoom: 0;
    cursor: pointer;
`;
const LiItem = styled.li`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;
    :first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
`;
function ItemList({data, selectItem, renderItem}) {
    
    function renderItems() {
        return data.map(item => {
            const {id} = item;
            const label = renderItem(item);
            return <LiItem 
                        key={id}
                        onClick={() => selectItem(id)}>{label}
                    </LiItem>
        })
    }
    
    return (
        <UlBlock >
            {renderItems()}
        </UlBlock>
    );
    
}
export default ItemList;