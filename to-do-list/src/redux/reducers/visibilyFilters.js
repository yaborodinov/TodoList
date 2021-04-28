import { SET_FILTERS } from "../actionTypes";
import { VIS_FILTERS } from "../../consts";


const initialState = VIS_FILTERS.ALL;

const visibilityFilter = (state=initialState,action) => {
    switch (action.type) {
        case SET_FILTERS: {
            return action.payload.filters;
        }
        default: {
            return state;
            }
    }
}

export default visibilityFilter;