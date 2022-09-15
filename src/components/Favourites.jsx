import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.favourites);
  console.log(favourites);

  useEffect(() => {}, []);

  return (
    <>
      <h1>FAVOURITES</h1>
      <ul>
        {favourites.map((company, i) => {
          return (<li key={i}>{company}</li>)
        })}
      </ul>
      <Link to="/">Back to Search</Link>
    </>
  );
};

export default Favourites;
