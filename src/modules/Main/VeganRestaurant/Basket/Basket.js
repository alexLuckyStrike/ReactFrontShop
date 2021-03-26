import React from 'react';
import css from './Basket.css';
import DishList from "./DishList/DishList";


class Basket extends React.Component{
    render(){
        return(
            <div className='Basket'>
                <h2 style={{textAlign:'center'}}>Сумма заказа:{this.props.amount}</h2>
                   <h3 style={{textAlign:'center'}}>{this.props.dish}</h3>
                <DishList
                    onChanger = {this.props.reBuild}
                    children = {this.props.inserts}>

                </DishList>
            </div>
        )
    }
}

export default Basket