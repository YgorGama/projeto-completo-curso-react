import ExpensemItem from "./ExpensemItem";
import './ExpensemList.css'

const ExpensemList  = props => {
    let expenseContent = <p>No expenses found.</p>;

    if(props.items.length === 0){ 
        return <h2 className="expenses-list__fallback ">Found no expenses.</h2>
    }

    return(
        <ul className="expenses-list">
            {props.items.map((expenses) => (
                <ExpensemItem
                    key={expenses.id}
                    title={expenses.title}
                    amount={expenses.amount}
                    date={expenses.date}
                />
             ))}
        </ul>
    )
}

export default ExpensemList;