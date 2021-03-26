import React from 'react';
import css from './DishItem.css';

class DishItem extends React.Component{

    render(){

        let group = this.props.children;

        return(
            group.map(function(item,index){

            return <li className='DishItem' key ={index}>{item}</li>

            })
        )
    }
}


export default DishItem