import React, {useState, useReducer } from 'react';
import { initialState, reducer} from '../Reducers/reducer';
import Items from './Items';

const Form = () => {
    const [item,setItem] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        e.preventDefault();
        setItem(e.target.value);
    }
    const toggleComplete = (e, id) => {
        dispatch({type: 'TOGGLE_COMPLETED', id: id})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: item || state.item})
        setItem("")
    }
    const clearCompleted = (e) => {
        e.preventDefault();
        dispatch({type: 'CLEAR_COMPLETED'})
    }
    console.log(state)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="item" placeholder="Item" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            {state.map((item, index) => {
                return (
                    <Items item={item.item} completed={item.completed} id={item.id} key={index} toggleComplete={toggleComplete} />
                )
            })}
            <button onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default Form;