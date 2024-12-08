import React, { useState } from "react";
import ExpenseitemdateandItem from "../expensedateitem/ExpenseitemdateandItem";

export default function ExpenseItem({ expensitem, expenseprice, expensedate }) {
  const [item, setnewItem] = useState(expensitem);
  const handleitemclick = () => {
    setnewItem("updated");
  };
  return (
    <div className="flex flex-row w-[66.25rem] mt-6 rounded-3xl h-[8rem] px-6 bg-green-950 items-center justify-between">
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
      <div className="text-2xl text-white font-bold w-[10.25rem] px-16 py-4 bg-blue-950 rounded-2xl border-[.125rem] border-t-white">
        <h1>₹{expenseprice}</h1>
      </div>
      {/* <div className="text-base text-orange-950 px-2 py-4 bg-slate-300 rounded-2xl border-[.125rem] border-t-white">
        <button onClick={handleitemclick}>change Item</button>
      </div> */}
    </div>
  );
}
