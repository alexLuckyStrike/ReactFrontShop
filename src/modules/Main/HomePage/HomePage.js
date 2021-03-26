import React from 'react';
import css from './HomePage.css';

class HomePage extends React.Component{
    render(){
        return(
            <div className='HomePage'>
                <h1>Доброго времени суток!!</h1>
                <p className='HomePage__text'>
                    В представленном приложении Вы можете заказать еду на свой вкус в ведущих ресторанах
                    нашего города, приятного Вам аппетита.
                </p>
            </div>
        )
    }
}

export default HomePage;