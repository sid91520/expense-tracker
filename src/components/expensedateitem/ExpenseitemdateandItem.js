import React from 'react';
import Expenseproduct from './Expenseproduct';

function ExpenseitemdateandItem(props) {
    const month = props.expensedate.toLocaleString('en-US', { month: 'long' });
    const year = props.expensedate.getFullYear(); 
    const day = props.expensedate.getDate();

    return (
        <div className="flex flex-row md:w-[30rem] sm:w-[30rem] w-[15rem] items-center sm:justify-between justify-start">
            <div className="relative flex flex-col w-[6rem] sm:w-[10.25rem] md:w-[10.25rem] text-amber-100 font-bold rounded-xl sm:px-10 px-2 sm:py-3 py-1 bg-slate-800 justify-evenly border-[.125rem] border-t-white">
                <div className='sm:text-lg text-sm'><h1>{month}</h1></div>
                <div className='sm:text-lg text-base'><h1>{year}</h1></div>
                <div className='sm:text-3xl text-sm'><h1>{day}</h1></div>
            </div>
            <div className="text-slate-100 font-extrabold ml-2"> {/* Add margin-left for spacing */}
                <Expenseproduct expensitem={props.expensitem} />
            </div>
        </div>
    );
}

export default ExpenseitemdateandItem;
