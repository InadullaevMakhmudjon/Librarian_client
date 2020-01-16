import types from './student.actionTypes';

const INITIAL_STATE = {
  student: null,
  books: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_STUDENT:
      return {
        ...state,
        student: action.payload,
      };
    case types.DELETE_STUDENT:
      return {
        ...state,
        student: null,
        books: [],
      };
    case types.INSERT_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case types.REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};
