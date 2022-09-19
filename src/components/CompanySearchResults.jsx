import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import "../styles/search.css";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    favourites: state.favourites,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromFavourites: indexToRemove => {
      dispatch({
        type: "REMOVE_FROM_FAVOURITES",
        payload: indexToRemove,
      });
    },

    addToFavourites: company => {
      dispatch({
        type: "ADD_TO_FAVOURITES",
        payload: company,
      });
    },
  };
};

const CompanySearchResults = ({ favourites = [], removeFromFavourites, addToFavourites }) => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();

  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="mb-5">
            {params.companyName} Search Results
            {favourites.includes(params.companyName) ? (
              <Button
                className="ml-4"
                onClick={() => {
                  removeFromFavourites(favourites.indexOf(params.companyName));
                }}
                variant="danger"
              >
                Unfavourite
              </Button>
            ) : (
              <Button
                className="ml-4"
                onClick={() => {
                  addToFavourites(params.companyName);
                }}
              >
                Favourite
              </Button>
            )}
          </h1>
          <div className="searchContainer p-2">
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </div>

          <div className="mt-4">
            <span>
              <Link className="ml-2" to="/">
                Back to Search
              </Link>
              <Link className="ml-5" to="/favourites">
                Go to Favourites
              </Link>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanySearchResults);
