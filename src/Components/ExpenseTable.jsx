const ExpenseTable = ({ expenses, deleteExpense, setEditingExpense }) => {
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?",
    );

    if (confirmDelete) {
      deleteExpense(id);
    }
  };

  return (
    <div className="overflow-x-auto mt-10">
      <table className="w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-5 text-left">ID</th>

            <th className="p-5 text-left">Product</th>

            <th className="p-5 text-left">Category</th>

            <th className="p-5 text-left">Amount</th>

            <th className="p-5 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr
              key={expense.id}
              className="border-b hover:bg-gray-100 transition"
            >
              <td className="p-5">{expense.id}</td>

              <td className="p-5 font-medium">{expense.product}</td>

              <td className="p-5">{expense.category}</td>

              <td className="p-5 font-semibold">₦{expense.amount}</td>

              <td className="p-5 flex gap-3">
                <button
                  onClick={() => setEditingExpense(expense)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(expense.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
