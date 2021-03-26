import React from 'react';
import css from './VeganItem.css';

class VeganItem extends React.Component{
    render(){
        return(
            <div className='MenuItem'>
            <h3>{this.props.title}</h3>
             <p>{this.props.price}</p>
             <button onClick={this.props.onChoose}>{this.props.name}</button>
            </div>
        )
    }
}


export default VeganItem;

