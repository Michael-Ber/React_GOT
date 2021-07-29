import React, {Component} from 'react';
import styled from 'styled-components';
import '../../services/gotService';
// import GotService from '../../services/gotService';
// import withData from '../withData';
// import Spinner from '../spinner';
// import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

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
export default class ItemList extends Component {
    static defaultProps = {
        selectItem: () => {}
    }
    static propTypes = {
        selectItem: PropTypes.func
    }
    renderItems() {
        const {data} = this.props;
        const {selectItem} = this.props;
        return data.map(item => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return <LiItem 
                        key={id}
                        onClick={() => selectItem(id)}>{label}
                    </LiItem>
        })
    }
    render() {
        return (
            <UlBlock >
                {this.renderItems()}
            </UlBlock>
        );
    }
}

// const withData = (View, getData) => {
//     return class extends Component {
//         state = {
//             data: null, 
//             error: false
//         };
        
//         componentDidMount() {
//             getData()
//                 .then((data) => {
//                     return this.setState({data})
//                 })
//         }
//         componentDidCatch() {
//             this.setState({error: true})
//         }
//         render() {
//             if(this.state.error) {
//                 return <ErrorMessage></ErrorMessage>
//             }
//             if(!this.state.data) {
//                 return (
//                     <Spinner></Spinner>
//                 )
//             }
//             return <View {...this.props} data={this.state.data}/>
//         }
//     }
// }
// const {getAllCharacters} = new GotService();
// export default withData(ItemList, getAllCharacters);