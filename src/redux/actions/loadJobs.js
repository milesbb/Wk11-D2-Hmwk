export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";
export const GET_JOBS_LOADING = "GET_JOBS_LOADING";

export const getJobs = (companyName) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_JOBS_LOADING,
        payload: true,
      });

      let response = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?company=" + companyName
      );

      if (response.ok) {
        let jobs = await response.json();

        dispatch({
          type: GET_JOBS,
          payload: jobs,
        });
      } else {
        console.log("error");
        dispatch({
          type: GET_JOBS_ERROR,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_JOBS_ERROR,
      });
    } finally {
      dispatch({
        type: GET_JOBS_LOADING,
        payload: false,
      });
    }
  };
};
