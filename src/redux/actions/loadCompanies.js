export const GET_COMPANIES = "GET_COMPANIES";
export const GET_COMPANIES_ERROR = "GET_COMPANIES_ERROR";
export const GET_COMPANIES_LOADING = "GET_COMPANIES_LOADING";

export const getCompanies = (query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_COMPANIES_LOADING,
        payload: true,
      });

      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?search=" + query
      );

      if (response.ok) {
        let companies = await response.json();

        dispatch({
          type: GET_COMPANIES,
          payload: companies,
        });
      } else {
        console.log("error with initial fetch");
        dispatch({
          type: GET_COMPANIES_ERROR,
        });
      }
    } catch (error) {
      console.log("try catch error:", error);
      dispatch({
        type: GET_COMPANIES_ERROR,
      });
    } finally {
      dispatch({
        type: GET_COMPANIES_LOADING,
        payload: false,
      });
    }
  };
};
