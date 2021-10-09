import React from "react";
import './ExpenseForm.css';
import {useState} from 'react'
function ExpenseForm () {// When the button is pressed, the form gets submitted since it's inside the form

    const [enteredTitle, setenteredTitle] = useState("");
    const [enteredAmount, setenteredAmount] = useState("");
    const [enteredDate, setenteredDate] = useState("");

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
        console.log(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        
        // setUserInput((prevState) => { // Better approach than previous comment because here react ensures 
                                         // that we get the latest state snapshot keeping all the schedules update in mind
        //     return { ...prevState, enteredTitle: event.target.value}
        // })
    }

    const amountChangeHandler = (event) => {
        setenteredTitle(event.target.value);
        console.log(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setenteredTitle(event.target.value);
        console.log(event.target.value);
    }
    return (
    <form> 
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>

            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>   
        </div>
    </form>
    )
}

export default ExpenseForm;