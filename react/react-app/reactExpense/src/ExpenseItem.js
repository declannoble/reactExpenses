import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css"

const ExpenseItem = (props) => {
    const [title, setTitle ] = useState(props.title);

    
    const Clickhandler = () => {
        setTitle('Updated!')
        console.log(title)
    }    
    return (
    <div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={Clickhandler}>Change title</button>
        </div>
    </div>
    );
}
export default ExpenseItem
