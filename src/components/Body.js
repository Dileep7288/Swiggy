import RestaurantCard, { withPromotedRestaurant } from "./RestaurantCard";
//import resObj from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local state variable - Super powerful variable
  const [ListofRestaurants, setListofRestauarants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  //const [RestaurantLabelCard] = withPromotedRestaurant(RestaurantCard);

  console.log("Body Rendered", ListofRestaurants);

  //Whenever state variable update react triggers a reconciliation cycle(rerender the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4913862&lng=78.3998642&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //console.log(json);

    setListofRestauarants(
      //Optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  //   if (ListofRestaurants.length === 0) {
  //     return <Shimmer />;
  //   }

  //terenary operator
  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false)
    return (
      <h1>
        Sorry No Internet Connection !!! Please check your internet connection{" "}
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return ListofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredList = ListofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = ListofRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>Name : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="w-full flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="res"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* Higher order function is using in here


            {restaurant.info.promoted ? (
              <RestaurantLabelCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )} */}

            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
