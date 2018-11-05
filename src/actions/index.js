import {FETCH_STATUS} from "./Types";

export const fetching = payload => {
  return {
    type: FETCH_STATUS,
    payload
  };
};