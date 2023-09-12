import * as messagesActionCreators from "./messages";
import * as profileActionCreators from "./profile";

export const actionCreators = {
  ...messagesActionCreators,
  ...profileActionCreators,
};
