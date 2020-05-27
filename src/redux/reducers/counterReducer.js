const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER': {
      return {
        ...state,
        counter: state.counter + action.value,
      };
    }
    case 'DECREASE_COUNTER': {
      return {
        ...state,
        counter: state.counter - action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
