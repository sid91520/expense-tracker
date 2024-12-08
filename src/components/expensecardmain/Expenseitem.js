import React, { useState } from "react";
import ExpenseitemdateandItem from "../expensedateitem/ExpenseitemdateandItem";

export default function ExpenseItem({ expensitem, expenseprice, expensedate }) {
  const [item, setnewItem] = useState(expensitem);
  const handleitemclick = () => {
    setnewItem("updated");
  };
  return (
    <div className="flex flex-row sm:w-[77.25rem] md:w-[77.25rem] w-[21rem] mt-6 rounded-3xl sm:h-[8rem] md:h-[8rem] h-[6rem] sm:px-6 md:px-6 px-2 bg-green-950 items-center justify-between">
      {/* <div className="text-2xl text-amber-100 font-bold rounded-md">
        <h1>{props.expense.expenseDate}</h1>
      </div>
      <div className="text-3xl text-slate-100 font-extrabold">
        <h1>{props.expense.expensitem}</h1>
      </div>
      <div className="text-2xl text-white font-bold px-16 py-4 bg-blue-950 rounded-2xl">
        <h1>${props.expense.expenseprice}</h1>
      </div> */}
      <ExpenseitemdateandItem
        expensedate={expensedate}
        expensitem={item}
      />
      <div className="sm:text-2xl text-sm text-white font-bold sm:w-[10.25rem] w-[2.25rem] sm:px-16 px-10 py-4 bg-blue-950 rounded-2xl border-[.125rem] border-t-white">
        <h1>₹{expenseprice}</h1>
      </div>
      {/* <div className="text-base text-orange-950 px-2 py-4 bg-slate-300 rounded-2xl border-[.125rem] border-t-white">
        <button onClick={handleitemclick}>change Item</button>
      </div> */}
    </div>
  );
}
