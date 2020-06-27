import { TOGGLE_NAV } from "./actionTypes";



export const toggleNav = id => ({
    type: TOGGLE_NAV,
    payload: { id }
});

