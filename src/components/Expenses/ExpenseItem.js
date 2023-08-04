import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.scss';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    
    const titleHandler = () => {
        return (
            setTitle('Title changed!!!')
        );
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={titleHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;