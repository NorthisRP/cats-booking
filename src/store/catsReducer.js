const defaultState = { cats: [] };

const ADD_CATS = "ADD_CATS";
const CHANGE_BOOK = "CHANGE_BOOK";
const DELETE_CAT = "DELETE_CAT";
const ADD_CAT = "ADD_CAT";

export const catsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CATS:
      return { ...state, cats: action.payload };
    case CHANGE_BOOK:
      return {
        ...state,
        cats: state.cats.map((cat) =>
          cat.id === action.payload ? { ...cat, isBooked: !cat.isBooked } : cat
        ),
      };
    case DELETE_CAT:
      return {
        ...state,
        cats: state.cats.filter((cat) => cat.id !== action.payload),
      };
    case ADD_CAT:
      return { ...state, cats: [...state.cats, action.payload] };

    default:
      return state;
  }
};

export const addCats = (payload) => ({ type: ADD_CATS, payload });
export const addCat = (payload) => ({ type: ADD_CAT, payload });
export const changeBook = (payload) => ({ type: CHANGE_BOOK, payload });
export const deleteLocalCat = (payload) => ({ type: DELETE_CAT, payload });
