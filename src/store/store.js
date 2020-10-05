import { createStore, combineReducers } from "redux";
import shortid from "shortid";

export const CREATE_REMINDER = "CREATE_REMINDER";
export const UPDATE_REMINDER = "UPDATE_REMINDER";
export const DELETE_REMINDER = "DELETE_REMINDER";

export const createReminder = (details) => ({
  type: CREATE_REMINDER,
  payload: { details },
});

export const updateReminder = (id, details) => ({
  type: UPDATE_REMINDER,
  payload: { id, details },
});

export const deleteReminder = (id) => ({
  type: DELETE_REMINDER,
  payload: { id },
});

const reminderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REMINDER: {
      const { details } = action.payload;

      return {
        ...state,
        [shortid()]: details,
      };
    }

    case UPDATE_REMINDER: {
      const { id, details } = action.payload;

      return {
        ...state,
        [id]: details,
      };
    }

    case DELETE_REMINDER: {
      const { id } = action.payload;

      return {
        ...state,
        [id]: undefined,
      };
    }

    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({
    reminder: reminderReducer,
  })
);
