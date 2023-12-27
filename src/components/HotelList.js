import { useState, useEffect, useRef } from "react";
import { getHotelsService } from "../services/hotelServices";
import loading from "../images/loading.gif";
import sortdescending from "../images/sort-descending.svg";
import sortascending from "../images/sort-ascending.svg";
import { useNavigate } from "react-router-dom";
import { axios_hotels } from "../services/axios";

import Search from "./Search";

function HotelList(props) {
  const [hotelList, setHotelList] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterType, setFilterType] = useState("");
  const [sortBy, setSortBy] = useState({ by: "", descending: false });
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const fetchHotelsData = async () => {
    setIsLoading(true);
    // const response = await getHotelsService();
    console.log("getting Data");
    const response = await axios_hotels.get("https://192.168.1.4:8000/hotels", {
      // Desactivar la verificación de certificados
      httpsAgent: false,
    });

    if (response && response.data) {
      setHotelList(response.data);
      setFilteredHotels(response.data);
      console.log("Fetching data", response.data);
    } else {
      console.error("Error:", response.toString());
      navigate("/home");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHotelsData();
  }, []);

  useEffect(() => {
    console.log("useEffect sortBy", sortBy);
    if (sortBy !== "") sortHotels(sortBy);
  }, [sortBy]);

  const searchHotel = (search) => {
    if (filterType !== "") {
      const value = search.toUpperCase();
      const filteredData = hotelList?.filter((hotel) => {
        return hotel?.[filterType].toString().toUpperCase().includes(value);
      });
      setFilteredHotels(filteredData);
    }
  };
  const sortHotels = (type) => {
    // setFilteredHotels([]);
    let sortedData = [];
    if (type?.by === "name") {
      sortedData = filteredHotels.sort((a, b) => {
        const nameA = a[type?.by].toString().toUpperCase(); // ignore upper and lowercase
        const nameB = b[type?.by].toString().toUpperCase(); // ignore upper and lowercase
        if (type.descending) {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        } else {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
        }
        // names must be equal
        return 0;
      });
    } else {
      // if (type.by === "price") {
      if (type.descending) {
        sortedData = [...filteredHotels].sort((a, b) => {
          return b[type?.by] - a[type?.by];
        });
        // items.sort((a, b) => a.value - b.value);
      } else {
        sortedData = [...filteredHotels].sort((a, b) => {
          return a[type?.by] - b[type?.by];
        });
      }
      // }
    }
    console.log(
      "sortedData",
      sortedData,
      "descending",
      type.descending,
      "type",
      type
    );
    setFilteredHotels(sortedData);
  };

  
  return (
    <>
      {isLoading ? (
        <img src={loading} className="nav--icono" alt="Loading" />
      ) : (
        <div className="container-fluid">
          <Search
            darkMode={props.modoOscuro}
            filterType={filterType}
            setFilterType={setFilterType}
            setSearchText={setSearchText}
            searchText={searchText}
            searchHotel={searchHotel}
            setFilteredHotels={setFilteredHotels}
            hotelList={hotelList}
          />
          {filteredHotels?.length > 0 ? (
            <table className="container">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="col-2 header"
                    onClick={(e) => {
                      console.log("sortBy", sortBy);
                      setSortBy({
                        by: "id",
                        descending:
                          sortBy.by === "id" ? !sortBy.descending : false,
                      });
                    }}
                  >
                    # ID
                    {sortBy.by === "id" && (
                      <img
                        src={sortBy.descending ? sortdescending : sortascending}
                        className="filter-icon"
                        alt="Sort"
                      />
                    )}
                  </th>
                  <th
                    scope="col"
                    className="col-4 header"
                    onClick={(e) => {
                      setSortBy({
                        by: "name",
                        descending:
                          sortBy.by === "name" ? !sortBy.descending : false,
                      });
                    }}
                  >
                    Name
                    {sortBy.by === "name" && (
                      <img
                        src={sortBy.descending ? sortdescending : sortascending}
                        className="filter-icon"
                        alt="Sort"
                      />
                    )}
                  </th>
                  <th
                    scope="col"
                    className="col-2 header"
                    onClick={(e) => {
                      setSortBy({
                        by: "price",
                        descending:
                          sortBy.by === "price" ? !sortBy.descending : false,
                      });
                    }}
                  >
                    Price
                    {sortBy.by === "price" && (
                      <img
                        src={sortBy.descending ? sortdescending : sortascending}
                        className="filter-icon"
                        alt="Sort"
                      />
                    )}
                  </th>
                  <th
                    scope="col"
                    className="col-2 header"
                    onClick={(e) => {
                      setSortBy({
                        by: "rating",
                        descending:
                          sortBy.by === "rating" ? !sortBy.descending : false,
                      });
                    }}
                  >
                    Rating
                    {sortBy.by === "rating" && (
                      <img
                        src={sortBy.descending ? sortdescending : sortascending}
                        className="filter-icon"
                        alt="Sort"
                      />
                    )}
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredHotels?.map((hotel, index) => {
                  return (
                    <tr key={"hotel-" + hotel.id + index}>
                      <th>{hotel.id}</th>
                      <td>{hotel.name}</td>
                      <td>{hotel.price}</td>
                      <td>{hotel.rating}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <span>No data found</span>
          )}
        </div>
      )}
    </>
  );
}

export default HotelList;
