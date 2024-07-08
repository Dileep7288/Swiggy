import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] h-[450px] rounded-lg bg-gray-100 hover:border border-solid border-white">
      <img
        className="w-full h-1/2 rounded-lg"
        alt="no"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

//Higher Order Function is Exporting In here
// export const withPromotedRestaurant = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <h1>
//         <label>Promoted</label>
//         <RestaurantCard {...props} />
//       </h1>
//     );
//   };
// };

export default RestaurantCard;
