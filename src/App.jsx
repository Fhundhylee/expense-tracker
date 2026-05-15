import { useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import FilterPhase from "./components/FilterPhase";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const [filter, setFilter] = useState("All");

  const [editingExpense, setEditingExpense] = useState(null);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);

    setExpenses(updatedExpenses);
  };

  const updateExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense,
    );

    setExpenses(updatedExpenses);

    setEditingExpense(null);
  };

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === filter);

  const total = filteredExpenses.reduce(
    (acc, expense) => acc + Number(expense.amount),

    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ExpenseForm
        addExpense={addExpense}
        editingExpense={editingExpense}
        updateExpense={updateExpense}
      />

      <FilterPhase setFilter={setFilter} />

      <ExpenseTable
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
        setEditingExpense={setEditingExpense}
      />

      <div className="mt-10 bg-white shadow-xl rounded-2xl p-6 max-w-sm">
        <h1 className="text-3xl font-bold text-gray-800">Total: ₦{total}</h1>
      </div>
    </div>
  );
};

export default App;
