import { Row, Col } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/search.css";

// const mapStateToProps = (state) => {
//   return {
//     favourites: state.index.favourites,
//   };
// };

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.index.favourites);

  return (
    <Row
      className="mx-0 mt-3 p-3 searchItem"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      {favourites.includes(data.company_name) && (
        <Col xs={3}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="gold"
            className="bi bi-star-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </Col>
      )}
    </Row>
  );
};

export default Job;
