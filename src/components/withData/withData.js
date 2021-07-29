import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: null, 
            error: false
        };
        
        componentDidMount() {
            getData()
                .then((data) => {
                    return this.setState({data})
                })
        }
        componentDidCatch() {
            this.setState({error: true})
        }
        render() {
            if(this.state.error) {
                return <ErrorMessage></ErrorMessage>
            }
            if(!this.state.data) {
                return (
                    <Spinner></Spinner>
                )
            }
            return <View {...this.props} data={this.state.data}/>
        }
    }
}

export default withData;