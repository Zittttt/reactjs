import { ADD_COMMENT } from "../actions/types/fakeBookAppType";

const stateDefault = {
  arrComment: [
    { name: "khai", content: "hello" },
    { name: "hung", content: "hiiii" },
  ],
};

export const fakeBookAppReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      state.arrComment = [...state.arrComment, action.userComment];
      return { ...state };
    }

    default:
      return state;
  }
};
