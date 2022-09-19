import { useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import dog from "../assets/saddog3.png";
import "../styles/search.css";

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavourites: (indexToRemove) => {
      dispatch({
        type: "REMOVE_FROM_FAVOURITES",
        payload: indexToRemove,
      });
    },
  };
};

const Favourites = ({favourites = [], removeFromFavourites}) => {
  console.log(favourites);

  useEffect(() => {}, [favourites]);

  return (
    <div className="w-75 text-center mx-auto my-3">
      <h1 className="mt-3">Favourites</h1>
      {favourites.length === 0 ? (
        <div className="my-5">
          <h4>No favourites yet, go and find some!</h4>
          <Image src={dog} style={{ width: "10rem" }} rounded />
        </div>
      ) : (
        <ul style={{ listStyleType: "none" }}>
          {favourites.map((company, i) => {
            return (
              <li
                key={i}
                className="mx-0 mt-3 p-3 searchItem d-flex"
                style={{ border: "1px solid #00000033", borderRadius: 4 }}
              >
                <Link to={"/" + company} className="mx-auto">
                  {company}
                </Link>
                <Button
                  variant="danger"
                  onClick={() => {
                    removeFromFavourites(favourites.indexOf(company));
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

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
