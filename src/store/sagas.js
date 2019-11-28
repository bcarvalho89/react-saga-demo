import { takeEvery, put, all, call } from 'redux-saga/effects';

function apiGet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'Make coffee #1' },
        { id: 2, text: 'Make coffee #2' },
        { id: 3, text: 'Make coffee #3' },
        { id: 4, text: 'Make coffee #4' }
      ]);
    }, 2000);
  });
}

function* getTodoList() {
  try {
    const response = yield call(apiGet);

    yield put({
      type: 'TODO_LIST_SUCCESS',
      payload: { data: response }
    });
  } catch (err) {
    yield put({
      type: 'TODO_LIST_ERRROR'
    });
  }
}

export default function* root() {
  yield all([
    takeEvery('TODO_LIST_REQUEST', getTodoList)
  ])
}