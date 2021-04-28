import {ADD_TO_DO, TOGGLE_TODO, SET_FILTERS} from "./actionTypes"

const nextTodoId = 0;

export const AddTodo = (content) => {
    type: ADD_TO_DO,
        payload: {
        id: ++nextTodoId,
            content
        }
}

export const toggleToDo = (id) => {
    type: TOGGLE_TODO,
        payload:{id},
}
export const setFilters = (filters) => {
    type: SET_FILTERS,
        payload: {
            filters
        }
}