import { useState } from 'react';

const ExpensesFilter = (props) => {
    const dropdownChangeHandler = (event) => {
      props.onChangeFilter(event.target.value);
    };
  
    return (
        <div className='flex flex-row justify-between font-serif'>
            <div className='text-3xl text-slate-100 font-bold'>Filter By Year</div>
            <div className='text-xl text-black font-bold'>
            <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
        </select>
            </div>
        </div>
    );
}

export default ExpensesFilter;
