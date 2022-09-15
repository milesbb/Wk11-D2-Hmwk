import { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavourite } from "../features/favourite/favouriteSlice";
import dog from "../assets/saddog3.png"

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.favourites);
  console.log(favourites);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="w-75 text-center mx-auto my-3">
      <h1 className="mt-3">Favourites</h1>
      {favourites.length === 0 ? (
        <div className="my-5">
          <h4 >No favourites yet, go and find some!</h4>
          <Image src={dog} style={{width: "10rem"}} rounded />
        </div>
      ) : (
        <ul style={{listStyleType: "none"}}>
          {favourites.map((company, i) => {
            return (
              <li
                key={i}
                className="mx-0 mt-3 p-3"
                style={{ border: "1px solid #00000033", borderRadius: 4 }}
              >
                <Link to="/${company}">{company}</Link>
                <Button
                  className="ml-5"
                  variant="danger"
                  onClick={() => {
                    dispatch(removeFavourite(company));
                  }}
                >
                  Remove
                </Button>
              </li>
            );
          })}
        </ul>
      )}

      <Link to="/">Back to Search</Link>
    </div>
  );
};

export default Favourites;
