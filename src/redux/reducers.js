//for reducers
const initialState = {
  player1Score: 0,
  player2Score: 0,
};

const PlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_PLAYER1':
      return { ...state, player1Score: state.player1Score + 1 };
    case 'INCREMENT_PLAYER2':
      return { ...state, player2Score: state.player2Score + 1 };
    case 'RESET_STORE':
      return initialState; // Reset the state to initial values
    default:
      return state;
  }
};

export default PlayerReducer;
