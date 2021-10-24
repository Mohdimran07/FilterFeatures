import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  let [amount, setAmount] = useState(props.amount);

  const Change = () => {
    setAmount('100');
    console.log(amount);
  }
  const clickHandler = () => {
    setTitle('Update'); 
    console.log(title);
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={Change}>Expense</button>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;