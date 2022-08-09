import api from '../api/api';

// Action Type
const GET_RANDOM_MESSAGE = 'hello_rails_react/GET_RANDOM_MESSAGE';

// Action Creator
const getRandomMessage = () => async (dispatch) => {
  const response = await api.get('/message/random');
  const message = response.data;
  dispatch({ type: GET_RANDOM_MESSAGE, message });
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_RANDOM_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export { getRandomMessage, reducer };
