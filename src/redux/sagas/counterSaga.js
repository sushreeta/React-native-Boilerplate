import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';

function* increaseCounterAsync() {
  try {
    yield delay(4000);

    yield put({
      type: 'INCREASE_COUNTER_ASYNC',
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}

// Generator: Watch Increase Counter
export function* watchIncreaseCounter() {
  yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
}

// Decrease Counter Async
function* decreaseCounter() {
  try {
    yield put({
      type: 'DECREASE_COUNTER_ASYNC',
      value: 1,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* watchDecreaseCounter() {
  yield takeLatest('DECREASE_COUNTER', decreaseCounter);
}
