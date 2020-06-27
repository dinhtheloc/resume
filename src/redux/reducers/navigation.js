import { TOGGLE_NAV } from "../actionTypes";

const initialState = {
  isShow: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV: {
      return {
        ...state,
        isShow: !state.isShow
      };
    }
    default:
      return state;
  }
}
