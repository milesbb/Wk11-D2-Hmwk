import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Job from './Job'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'
import { addFavourite, removeFavourite } from '../features/favourite/favouriteSlice';

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()
  const dispatch = useDispatch();

  const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?company='

  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName)
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Company Results</h1>
          <Button onClick={() => {dispatch(addFavourite(params.companyName))}}>Favourite</Button>
          <Button onClick={() => {dispatch(removeFavourite(params.companyName))}}>Unfavourite</Button>
          <Link to="/favourites">Go to Favourites</Link>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
          <Link to="/">Back to Search</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default CompanySearchResults
