import types from './student.actionTypes';

export const setStudent = (student) => ({
  type: types.SET_STUDENT,
  payload: student,
});

export const addBook = (book) => ({
  type: types.INSERT_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: types.REMOVE_BOOK,
  payload: id,
});

export const deleteStudent = () => ({
  type: types.DELETE_STUDENT,
});
