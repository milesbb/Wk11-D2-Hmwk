import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../actions/loadJobs";


const initialState = {
  jobs: [],
  error2: false,
  loading2: false,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case GET_JOBS_ERROR:
      return {
        ...state,
        error2: true,
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        loading2: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
