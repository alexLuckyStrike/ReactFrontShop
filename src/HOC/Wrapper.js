import React,{Component} from 'react';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Header from '../modules/Header/Header';
import Main from "../modules/Main/Main";
import css from './Wrapper.css'

class Wrapper extends Component{
    render(){
        return(
            <HashRouter className = 'Wrapper'>
                <Header/>
                <Main/>
            </HashRouter>
        )
    }
}

export default Wrapper;