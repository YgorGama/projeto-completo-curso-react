import './NewExpense.css'
import ExpensemForm from './ExpensemForm';
import { useState } from 'react';
const NewExpense = (props) =>{
    const [isAppear, setIsAppear] = useState(false);
    const saveExpenseHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.addExpense(expenseData);
    }

    const showForm = () => setIsAppear(true);
    const closeForm = () => setIsAppear(false);

    return(
        <div className="new-expense">         
           {
            isAppear? 
            <ExpensemForm 
            close={closeForm} 
            onSaveExpenseData={saveExpenseHandler}/> 
            :<button onClick={showForm}>Add New Expense</button>
           }
        </div>
    )
}

export default NewExpense;