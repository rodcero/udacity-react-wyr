export const RECEIVE_USERS = 'RECEIVE_USERS';

export default (state = null, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return { ...action.users };
    default:
      return state;
  }
};
