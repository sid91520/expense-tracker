import React, { useState } from "react";

function Userinput(props) {
  const [newdate, setNewDate] = useState("");
  const handlechangedate = (e) => {
    setNewDate(e.target.value);
  };
  const [newitem, setNewitem] = useState("");
  const handlechangeitem = (e) => {
    setNewitem(e.target.value);
  };
  const [newamount, setNewamount] = useState("");
  const handlechangeamount = (e) => {
    setNewamount(e.target.value);
  };
  const submithandler = (e) => {
    e.preventDefault();
    const expensenewdata = {
      expensedate: new Date(newdate),
      expensitem: newitem,
      expenseprice: +newamount,
    };
    props.onsaveUserinputdata(expensenewdata)
    setNewDate("")
    setNewitem("")
    setNewamount("")
  };
  return (
    <div>
      <form onSubmit={submithandler}>
        <div className="py-[6px]">
          <span className="block text-xl font-bold text-zinc-300">date</span>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            onChange={handlechangedate}
            className="border-slate-200 w-[20rem] contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
            value={newdate}
          />
        </div>
        <div className="py-[6px]">
          <span className="block text-xl font-bold text-zinc-300">Item</span>
          <input
            value={newitem}
            type="text"
            onChange={handlechangeitem}
            className="border-slate-200 w-[20rem] contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
          />
        </div>
        <div className="py-[6px]">
          <span className="block text-xl font-bold text-zinc-300">Amount</span>
          <input
            value={newamount}
            type="number"
            onChange={handlechangeamount}
            className="border-slate-200 w-[20rem] contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
          />
        </div>
        <div className="py-[6px]">
          <button className="border-slate-200 text-white font-semibold text-xl w-[20rem] py-2 rounded-xl bg-[#3B1E54]">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default Userinput;
