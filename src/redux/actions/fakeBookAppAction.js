import { ADD_COMMENT } from "./types/fakeBookAppType";

export const addCommentAction = (userComment) => {
  return {
    type: ADD_COMMENT,
    userComment: userComment,
  };
};
