import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";
import "../styles/search.css";
import { getCompanies } from "../redux/actions/loadCompanies";
import { useDispatch, useSelector } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     companies: state.companies.companies.data,
//     error1: state.companies.error1,
//     loading1: state.companies.loading1,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCompaniesList: (query) => {
//       dispatch(getCompanies(query));
//     },
//   };
// };

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()
  const companies = useSelector((state) => state.companies.companies.data);
  const error1 = useSelector((state) => state.companies.error1);
  const loading1 = useSelector((state) => state.companies.loading1);

  console.log(companies)

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getCompanies(query))
    // getCompaniesList(query);
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto text-center my-3">
          <h1 className="mt-3">Remote Jobs Search</h1>
          <h4 className="mt-3">Find that job you've been looking for...</h4>
          <Link to="/favourites">Or go to Favourites!</Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loading1 && (
            <Spinner className="" animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}

          {!loading1 && error1 && (
            <Alert className="m-1" variant="danger">
              There was an error retrieving the companies
            </Alert>
          )}
          {!loading1 && !error1 && companies !== undefined && (
            <div className="p-2 mt-4 searchContainer">
              {companies.map((jobData) => (
                <Job key={jobData._id} data={jobData} />
              ))}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch
