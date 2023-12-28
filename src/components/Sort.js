function Sort({ darkMode, setSortBy ,sortBy}) {
  const sortHotels = (typeStr) => {
    const sortP = typeStr.split("-");
    const type = {
      by: sortP[0],
      descending: sortP[1] === "descending" ? false : true,
    };

    setSortBy(type);
  };

  return (
    <div className="sort-section">
      <div className="input-group mb-3 mt-3 me-3">
        <label
          className="input-group-text"
          htmlFor="filter-type"
          style={{
            color: darkMode ? "white" : "#0e141b",
            backgroundColor: darkMode ? "#0e141b" : "#fbfbfb",
          }}
        >
          Sort:
        </label>
        <select
          className="form-control"
          id="filter-type"
          onChange={(e) => sortHotels(e.target.value)}
          value={setSortBy.by}
        >
          <option value=""></option>
          <option value="name-ascending">Name (A-Z)</option>
          <option value="name-descending">Name (Z-A)</option>
          <option value="price-ascending">Price (High to low)</option>
          <option value="price-descending">Price (Low to high)</option>
          <option value="rating-ascending">Rating (High to low)</option>
          <option value="rating-descending">Rating (Low to high)</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
