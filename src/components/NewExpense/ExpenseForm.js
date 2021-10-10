import React from "react";
import './ExpenseForm.css';
import {useState} from 'react'
function ExpenseForm (props) {// When the button is pressed, the form gets submitted since it's inside the form

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData)   // We can execute it here, even if this function is not present in this component, because we are passing a prop from a level up
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    

    return (
    <form onSubmit={submitHandler}> 
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>

            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>   
        </div>
    </form>
    )
}

export default ExpenseForm;