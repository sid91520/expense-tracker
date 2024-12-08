import React from 'react'
import Expenseproduct from './Expenseproduct';

function ExpenseitemdateandItem(props) {
  
    const month = props.expensedate.toLocaleString('en-US', { month: 'long' });
  const year = props.expensedate.getFullYear(); 
  const day = props.expensedate.getDate();
  return (
    <div className="flex flex-row w-[30rem] items-center justify-evenly">
      <div className="relative flex flex-col w-[10.25rem] text-amber-100 font-bold rounded-xl px-10 py-3 bg-slate-800 justify-evenly border-[.125rem] border-t-white">
    <div className='text-lg'><h1>{month}</h1></div>
    <div><h1>{year}</h1></div>
    <div className='text-3xl'><h1>{day}</h1></div>
    </div>
    <div className="text-3xl w-[10.25rem] text-slate-100 font-extrabold">
       <Expenseproduct expensitem={props.expensitem}/>
      </div></div>
  )
}

export default ExpenseitemdateandItem
