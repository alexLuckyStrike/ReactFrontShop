import React from 'react';
import {Route,NavLink,HashRouter} from "react-router-dom";
import css from './Header.css';


class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <nav className='navigation'>
                <ul className='navigation-menu'>
                    <li className='navigation-menuItem'>
                        <NavLink className ='navigation-menuItem__Link' to = '/'>Главная</NavLink>
                    </li>
                    <li className='navigation-menuItem'>
                        <NavLink className ='navigation-menuItem__Link' to ='./meat'>Мясной пир</NavLink>
                    </li>
                    <li className='navigation-menuItem'>
                        <NavLink className ='navigation-menuItem__Link' to ='vegan'>Вегетарианский</NavLink>
                    </li>
                    <li className='navigation-menuItem'>
                        <NavLink className ='navigation-menuItem__Link' to ='sea'>Морской бриз</NavLink>
                    </li>
                </ul>
                </nav>
            </div>
        )
    }
}

export default Header;