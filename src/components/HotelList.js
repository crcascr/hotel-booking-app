import { useState, useEffect, useRef } from "react";
import { getHotelsService } from "../services/hotelServices";
import loading from "../images/loading.gif";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import Sort from "./Sort";
import Hotel from "./Hotel";

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
    const response = await getHotelsService();

    if (response && response.data) {
      setHotelList(response.data);
      setFilteredHotels(response.data);
    } else {
      navigate("/home");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHotelsData();
  }, []);

  useEffect(() => {
    if (sortBy !== "") sortHotels(sortBy);
  }, [sortBy]);

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

    setFilteredHotels(sortedData);
  };

  const hotelElements = filteredHotels.map((hotel, index) => {
    return (
      <Hotel
        key={index}
        hotelData={hotel}
        hotelIndex={index}
        darkMode={props.modoOscuro}
      />
    );
  });

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <img src={loading} className="loading" alt="Loading" />
        </div>
      ) : (
        <div className="container-fluid">
          <Search
            darkMode={props.modoOscuro}
            filterType={filterType}
            setFilterType={setFilterType}
            setSearchText={setSearchText}
            searchText={searchText}
            setFilteredHotels={setFilteredHotels}
            hotelList={hotelList}
          />
          <Sort darkMode={props.modoOscuro} setSortBy={setSortBy} />

          {filteredHotels?.length > 0 ? (
            <div className="hotelsContainer">{hotelElements}</div>
          ) : (
        
            <span>No data found</span>
          )}
        </div>
      )}
    </>
  );
}

export default HotelList;
