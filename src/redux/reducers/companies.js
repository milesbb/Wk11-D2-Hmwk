import { GET_COMPANIES, GET_COMPANIES_ERROR, GET_COMPANIES_LOADING } from "../actions/loadCompanies";

const initialState = {
  companies: [],
  error1: false,
  loading1: false,
};

const CompaniesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };

    case GET_COMPANIES_ERROR:
      return {
        ...state,
        error1: true,
      };

    case GET_COMPANIES_LOADING:
      return {
        ...state,
        loading1: action.payload,
      };
    default:
      return state;
  }
};

export default CompaniesReducer;