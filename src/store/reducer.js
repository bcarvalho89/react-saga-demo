const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

const todos = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'TODO_LIST_REQUEST':
      return {...state, loading: true};
    case 'TODO_LIST_SUCCESS':
      return {data: action.payload.data, loading: false, error: false};
    case 'TODO_LIST_ERROR':
        return {data: [], loading: false, error: true};
    // case 'ADD_TODO':
    //   return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}

export default todos; 