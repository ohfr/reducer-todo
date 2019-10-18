export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: '3892987589'

}

export const reducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                completed: !state.completed
            }
        case "ADD_ITEM": 
            return {
                ...state,
                item: action.payload,
                id: state.id + 1
            }
    }
}