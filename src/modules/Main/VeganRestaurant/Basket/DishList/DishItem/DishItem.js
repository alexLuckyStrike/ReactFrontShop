import React from 'react';
import css from './DishItem.css';

function DishItem(props){
    let group  = props.children;
    console.log(group);
    return(
        group.map(function(item,index){
            return <li className='DishItem' key ={index}>{item}</li>
        })
    )
}


export default DishItem