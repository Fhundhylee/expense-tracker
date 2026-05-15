const FilterPhase = ({ setFilter }) => {
  return (
    <div className="my-8">
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="border border-gray-300 p-4 rounded-xl bg-white"
      >
        <option value="All">All</option>

        <option value="Groceries">Groceries</option>

        <option value="Fashion">Fashion</option>

        <option value="Gadget">Gadget</option>
      </select>
    </div>
  );
};

export default FilterPhase;
