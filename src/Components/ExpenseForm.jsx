import { useForm } from "react-hook-form";

const ExpenseForm = ({ addExpense, editingExpense, updateExpense }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: editingExpense || {},
  });

  const onSubmit = (data) => {
    if (editingExpense) {
      updateExpense({
        ...data,
        id: editingExpense.id,
      });
    } else {
      const newExpense = {
        id: Date.now(),
        ...data,
      };

      addExpense(newExpense);
    }

    reset();
  };

  return (
    <div className="mb-12">
      <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Expense Tracker
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 space-y-6"
      >
        {/* PRODUCT */}

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Product
          </label>

          <input
            type="text"
            placeholder="Enter Product"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none"
            {...register("product", {
              required: "Product is required",
              minLength: {
                value: 4,
                message: "Product must be at least 4 letters",
              },
            })}
          />

          {errors.product && (
            <p className="text-red-500 mt-2 text-sm">
              {errors.product.message}
            </p>
          )}
        </div>

        {/* CATEGORY */}

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Category
          </label>

          <select
            className="w-full border border-gray-300 p-4 rounded-xl outline-none"
            {...register("category", {
              required: "Category is required",
            })}
          >
            <option value="">Select Category</option>

            <option value="Groceries">Groceries</option>

            <option value="Fashion">Fashion</option>

            <option value="Gadget">Gadget</option>
          </select>

          {errors.category && (
            <p className="text-red-500 mt-2 text-sm">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* AMOUNT */}

        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Amount
          </label>

          <input
            type="number"
            placeholder="Enter Amount"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none"
            {...register("amount", {
              required: "Amount is required",
            })}
          />

          {errors.amount && (
            <p className="text-red-500 mt-2 text-sm">{errors.amount.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 hover:bg-black transition text-white py-4 rounded-xl font-semibold"
        >
          {editingExpense ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
