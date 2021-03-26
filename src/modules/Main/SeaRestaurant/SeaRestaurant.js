import React,{Component} from "react";
import css from './SeaRestaurant.css';
import SeaItem from "./SeatItem/SeaItem";
import Basket from "./Basket/Basket";

class SeaRestaurant extends Component{

    state ={
        elements:[
            {title:'Dorado',price:4,name:'Заказать'},
            {title:'Forel',price: 5,name:'Заказать'},
            {title:'Sibas',price:6,name:'Заказать'},
            {title:'Seledka',price:7,name:'Заказать'},
            {title:'Shark',price:10,name:'Заказать'},
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

    takeAway = (e) => {

        let quel = e.target.textContent;

        let target = e.target;

        let group = this.state.elements;

        group.forEach((item) => {

            if(item.title === quel){

                console.log(item.price)

                this.setState({

                status:this.state.status - item.price

                })

                target.remove()

            }

        })


    }

    render(){
        let items = this.state.elements

        return(
            <div className='SeaRestaurant'>

                <h1 style={{textAlign:'center'}}>Морской бриз</h1>

                <Basket
                    dish = {this.state.statement}
                    amount = {this.state.status}
                    inserts = {this.state.order}
                    takeOff = {this.takeAway.bind(this)}
                >

                </Basket>

                {
                    items.map((item,index) => {
                        return(
                            <SeaItem
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

export default SeaRestaurant