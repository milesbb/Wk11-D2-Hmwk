import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourite } from '../features/favourite/favouriteSlice';

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.favourites);
  console.log(favourites);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="w-75 text-center mx-auto"> 
      <h1>FAVOURITES</h1>
      <ul>
        {favourites.map((company, i) => {
          return (
            <li
              key={i}
              className="mx-0 mt-3 p-3"
              style={{ border: "1px solid #00000033", borderRadius: 4 }}
            >
              <Link to="/${company}">{company}</Link><Button className="ml-5" variant="danger" onClick={() => {dispatch(removeFavourite(company))}}>Remove</Button>
            </li>
          );
        })}
      </ul>
      <Link to="/">Back to Search</Link>
    </div>
  );
};

export default Favourites;
