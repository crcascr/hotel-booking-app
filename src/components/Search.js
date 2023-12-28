import { useRef } from "react";

function Search(props) {
  const searchHotel = (search) => {
    if (props.filterType !== "") {
      const value = search.toUpperCase();
      const filteredData = props.hotelList?.filter((hotel) => {
        return hotel?.[props.filterType]
          .toString()
          .toUpperCase()
          .includes(value);
      });
      props.setFilteredHotels(filteredData);
    }
  };

  const inputRef = useRef(null);
  return (
    <div className="search-section">
      <div className="input-group mb-3 mt-3 me-3">
        <label
          className="input-group-text"
          htmlFor="filter-type"
          style={{
            color: props.darkMode ? "white" : "#0e141b",
            backgroundColor: props.darkMode ? "#0e141b" : "white",
          }}
        >
          Filter by:
        </label>
        <select
          className="form-control"
          id="filter-type"
          value={props.filterType}
          onChange={(e) => {
            props.setFilterType(e.target.value);
            props.setSearchText("");
            inputRef.current.focus();
          }}
        >
          <option value=""></option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      <input
        ref={inputRef}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        disabled={props.filterType === ""}
        value={props.searchText}
        id="search-input"
        onChange={(e) => {
          props.setSearchText(e.target.value);
          searchHotel(e.target.value);
        }}
      />
      <button
        className="m-2 btn btn-secondary"
        onClick={(e) => {
          props.setSearchText("");
          props.setFilterType("");
          props.setFilteredHotels(props.hotelList);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Search;
