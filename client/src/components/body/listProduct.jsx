import React from 'react';
import axios from 'axios';
import Oneproduct from './oneproduct.jsx'

export default class Listproduct extends React.Component {
    constructor(props){
        super(props);
        console.log('listproduct '+ this.props )
        this.state = {
            category : []     
        }
    }

    componentDidMount() {
        this.getData();
      }

    getData() {
        axios.post("/getProductsWithCategory",{category:this.props.category}).then((result) => {
            this.setState({ category: result.data });
            console.log('here',result.data)
            });

    }

    render() {
        

        return (
            <div className='product'>
                {this.state.category.map((prod, index) => {
                    return <Oneproduct prod={prod} key={index} index={index}  />;
                })}
            </div>
        )
    }
}

