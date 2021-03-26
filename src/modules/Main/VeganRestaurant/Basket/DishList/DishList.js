import React,{Component} from 'react';
import css from './DishList.css';
import DishItem from "./DishItem/DishItem";


class DishList extends Component{
    render(){
        return(
         <ul onMouseDown={this.props.onChanger} className='DishList'>
    <DishItem>
        {this.props.children}
    </DishItem>
         </ul>
        )
    }
}

export default DishList;