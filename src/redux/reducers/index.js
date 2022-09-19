import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions";

const initialState = {
  favourites: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favourites: [
          ...state.favourites.slice(0, action.payload),
          ...state.favourites.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};

export default mainReducer;
