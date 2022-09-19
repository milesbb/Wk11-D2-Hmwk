import { configureStore, combineReducers } from "@reduxjs/toolkit";

import indexReducer from "../reducers/index";
import companiesReducer from "../reducers/companies";
import jobsReducer from "../reducers/jobs";

const comboReducer = combineReducers({
  index: indexReducer,
  companies: companiesReducer,
  jobs: jobsReducer,
});

const store = configureStore({
  reducer: comboReducer,
});

export default store;