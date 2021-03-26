import React,{Component} from "react";
import css from './MeatRestaurant.css';
import MeatItem from "./MeatItem/MeatItem";
import Basket from "./Basket/Basket";


class MeatRestaurant extends Component{

    state ={

        elements:[

            {title:'chicken',price:4,name:'Заказать'},

            {title:'duck',price: 5,name:'Выбрать'},

            {title:'beef',price:6,name:'Вкусить'},

            {title:'fish',price:7,name:'Избрать'},

            {title:'rabbit',price:10,name:'Отдать предпочтение'},

        ],

        status:0,

        statement:'Ваш заказ:',

        order:[]

    }

    onChooseAction = (index) => {

        let dishList = this.state.order;

        let choosenDish = this.state.elements[index].title;

        dishList.unshift(choosenDish);

        this.setState({

            status:this.state.status + this.state.elements[index].price

        })

    }

    onRemoveAction = (e) => {

       let dishList = this.state.order

        let items = this.state.elements

        dishList.forEach((item) => {

            if(item === e.target.innerHTML){

                let target = e.target.innerHTML

                let quel = e.target

                items.forEach((elem) => {

                    if(target === elem.title){

                        console.log(elem.price)

                        this.setState({

                            status:this.state.status - elem.price

                        })

                        quel.remove()
                    }
                })

            }
        })

    }

    render(){

     let items = this.state.elements

        return(
            <div className='MeatRestaurant'>

                <h1 style={{textAlign:'center'}}>Мясной пир</h1>

            <Basket
            dish = {this.state.statement}

            amount = {this.state.status}

            inserts = {this.state.order}

            onRemove = {this.onRemoveAction.bind(this)}
            >

            </Basket>

                {
                    items.map((item,index) => {

                        return(

                            <MeatItem

                            key = {index}

                            title = {item.title}

                            price = {item.price}

                            name = {item.name}

                            onChoose = {this.onChooseAction.bind(this,index)}
                            />
                        )
                    })
                }

            </div>
        )
    }
}

export default MeatRestaurant