import React from 'react';
import Basket from "../VeganRestaurant/Basket/Basket";
import VeganItem from "./VeganItem/VeganItem";

class VeganRestaurant extends React.Component{

    state ={

        elements:[

            {title:'Fruits',price:4,name:'Заказать'},

            {title:'Vegetables',price: 5,name:'Заказать'},

            {title:'Salat',price:6,name:'Заказать'},

            {title:'Juice',price:7,name:'Заказать'},

            {title:'Desert',price:10,name:'Заказать'},

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

    onChanger = (e) => {

        let item = e.target.textContent;

        let elements = this.state.elements;

        let quel = e.target;

       elements.forEach((elem) => {

           if(elem.title === item){

               this.setState({

                   status:this.state.status - elem.price

               })

              quel.remove()

           }

       })

    }

    render(){
        let items = this.state.elements

        return(
            <div className='SeaRestaurant'>

                <h1 style={{textAlign:'center'}}>Вегетарианский ресторан</h1>

                <Basket
                    dish = {this.state.statement}

                    amount = {this.state.status}

                    inserts = {this.state.order}

                    reBuild = {this.onChanger.bind(this)}
                >

                </Basket>

                {
                    items.map((item,index) => {
                        return(
                            <VeganItem
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

export default VeganRestaurant;