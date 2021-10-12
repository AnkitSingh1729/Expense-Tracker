import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
    const [openForm, setOpenForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    const AddNewExpenseHandler = () => {
        setOpenForm(true);
    }
    const CancelFormHandler = () => {
        setOpenForm(false);
    }
    const AddNewExpense = <div>
        <button onClick={AddNewExpenseHandler}>Add New Expense</button>
    </div>



    return <div className="new-expense">
        {(openForm === false) ? AddNewExpense : <ExpenseForm onCancelForm={CancelFormHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        
    </div>
}

export default NewExpense;