import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Alert, Spinner } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import "../styles/search.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/actions/loadJobs";

// const mapStateToProps = (state) => {
//   return {
//     favourites: state.index.favourites,
//     jobs: state.jobs.jobs.data,
//     error2: state.jobs.error2,
//     loading2: state.jobs.loading2,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromFavourites: (indexToRemove) => {
//       dispatch({
//         type: "REMOVE_FROM_FAVOURITES",
//         payload: indexToRemove,
//       });
//     },

//     addToFavourites: (company) => {
//       dispatch({
//         type: "ADD_TO_FAVOURITES",
//         payload: company,
//       });
//     },

//     getJobsList: (companyName) => {
//       dispatch(getJobs(companyName));
//     },
//   };
// };

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.index.favourites);
  const jobs = useSelector((state) => state.jobs.jobs.data);
  const error2 = useSelector((state) => state.jobs.error2);
  const loading2 = useSelector((state) => state.jobs.loading2);

  const params = useParams();

  const baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?company=";

  useEffect(() => {
    // getJobsList(params.companyName);
    dispatch(getJobs(params.companyName));
  }, []);

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
                  // removeFromFavourites(favourites.indexOf(params.companyName));
                  dispatch({
                    type: "REMOVE_FROM_FAVOURITES",
                    payload: favourites.indexOf(params.companyName),
                  });
                }}
                variant="danger"
              >
                Unfavourite
              </Button>
            ) : (
              <Button
                className="ml-4"
                onClick={() => {
                  // addToFavourites(params.companyName);
                  dispatch({
                    type: "ADD_TO_FAVOURITES",
                    payload: params.companyName,
                  });
                }}
              >
                Favourite
              </Button>
            )}
          </h1>
          {loading2 && (
            <Spinner className="" animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}

          {!loading2 && error2 && (
            <Alert className="m-1" variant="danger">
              There was an error retrieving the companies
            </Alert>
          )}
          {!loading2 && !error2 && jobs !== undefined && (
            <div className="searchContainer p-2">
              {jobs.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </div>
          )}

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

export default CompanySearchResults;
