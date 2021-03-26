import React,{Component} from 'react';
import {Route,NavLink,HashRouter} from "react-router-dom";
import MeatRestaurant from "./MeatRestaurant/MeatRestaurant";
import VeganRestaurant from './VeganRestaurant/VeganRestaurant';
import SeaRestaurant from './SeaRestaurant/SeaRestaurant';
import HomePage from "./HomePage/HomePage";
import css from './Main.css'


class Main extends React.Component{
    render(){
        return(
            <div className='Main'>
                <Route exact path = '/' component = {HomePage}/>
                <Route path ='/meat' component = {MeatRestaurant}/>
                <Route path ='/vegan' component = {VeganRestaurant}/>
                <Route path ='/sea' component = {SeaRestaurant}/>
            </div>
        )
    }
}

export default Main;