
import React ,{useState} from 'react';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';
import Card from '../UI/Card';
const ExpenseItem = (props)=>{

    // const expenseDate= new Date(2022,6,19);
    // const expenseTitle='Car Insurance';
    // const expenseAmount="294.67";
    // const month = props.date.toLocaleString ('en-US', { month:'long' });
    // const day = props.date.toLocaleString ('en-US', { day:'2-digit' });
    // const year =props.date.getFullYear();

// const [title, setTitle]=useState(props.title);
// console.log('ExpenseItem evaluated by React');
// const clickHandler = () =>{
//     setTitle("Updated!!")
//  console.log(title);
// }

return(
    <Card className='expense-item '>
        
            {/* {props.date.toISOString()} */}
            {/* <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div> */}

       <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
);
}

export default ExpenseItem;