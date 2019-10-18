export const initialState =[ 
    {
    item: 'Learn about reducers',
    completed: false,
    id: '3892987589'
    }

]

export const reducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_COMPLETED":
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                } else {
                    return item;
                }
            })
        case "ADD_ITEM": 
            return [
                ...state, 
                {
                item: action.payload,
                id: Date.now(),
                completed: false
                }
            ]
        case "CLEAR_COMPLETED":
            return state.filter(item => {
                return !item.completed
            })
        default: 
            return state;
    }
}