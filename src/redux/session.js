const SAVE_TOKEN = 'SAVE_TOKEN';
const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const saveToken = token => ({
  type: SAVE_TOKEN,
  token,
});

const token = (state = null, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return action.token;
    case REMOVE_TOKEN:
      return null;
    default:
      return state;
  }
};

export default token;
