const playersReducer = (state, action) => {
  switch (action.type) {
    case "setPlayers": {
      return {
        ...state,
        players: action.data,
        isLoading: false,
        hasErrored: false,
      };
    }
    case "errored": {
      return { ...state, hasErrored: true, error: action.error };
    }
    default:
      return state;
  }
};

export default playersReducer;
