import { useState } from "react";
import "./App.css";
import Expenseitem from "./components/expensecardmain/Expenseitem";
import ExpensesFilter from "./components/expensedateitem/filterbyYear";
import Newexpenseuserinput from "./components/newexpenseuserinput/Newexpenseuserinput";
import Expensechart from "./components/expensedateitem/expensechart";

const dummy_expense = [
  {
    id: 1,
    expensitem: "paper",
    expenseprice: 300, // Changed to number
    expensedate: new Date(2021, 1, 14),
  },
  { id: 2, expensitem: "soap", expenseprice: 3, expensedate: new Date() },
  {
    id: 3,
    expensitem: "papertowel",
    expenseprice: 23,
    expensedate: new Date(2022, 11, 14),
  },
  {
    id: 4,
    expensitem: "shaving machine",
    expenseprice: 43,
    expensedate: new Date(2024, 6, 14),
  },
  {
    id: 5,
    expensitem: "iphone",
    expenseprice: 3000,
    expensedate: new Date(2023, 8, 14),
  },
];

function App() {
  const [dummyexpense, setDummyExpenses] = useState(dummy_expense);
  const newxpensecomingfrominput = (newdatafromexpense) => {
    setDummyExpenses((previousExpenses) => {
      return [newdatafromexpense, ...previousExpenses];
    });
    console.log(newdatafromexpense);
  };

  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = dummyexpense.filter((expense) => {
    return expense.expensedate.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <Expenseitem
        key={expense.id}
        expensitem={expense.expensitem}
        expenseprice={expense.expenseprice}
        expensedate={expense.expensedate}
      />
    ));
  }

  return (
    <div className="flex flex-col w-full items-center">
    <div className="text-5xl text-orange-400 font-extrabold">
      <h1>Expense tracker</h1>
    </div>
    <Newexpenseuserinput goingtonewuserinput={newxpensecomingfrominput} />
    <div className="px-[1.5rem] py-[1.5rem] max-md:w-[80rem] max-sm:w-[80rem] w-[70rem] rounded-2xl bg-slate-500">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <div className="px-[1.5rem] py-[1.5rem]">
      <Expensechart expenses={filteredExpenses}/></div>
      {expensesContent}
    </div>
  </div>
  );
}

export default App;
