function Sort(props) {
  return (
    <div className="sort-section">
      <div className="input-group mb-3 mt-3 me-3">
        <label
          className="input-group-text"
          htmlFor="filter-type"
          style={{
            color: props.darkMode ? "white" : "#0e141b",
            backgroundColor: props.darkMode ? "#0e141b" : "white",
          }}
        >
          Sort:
        </label>
        <select
          className="form-control"
          id="filter-type"
          
        >
          <option value=""></option>
          <option value="name-ascending">Name (A-Z)</option>
          <option value="name-descending">Name (Z-A)</option>
          <option value="price-ascending">Price (Low to high)</option>
          <option value="price-descending">Price (High to low)</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
