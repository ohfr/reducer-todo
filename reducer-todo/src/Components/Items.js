import React from 'react';

const Items = (props) => {

    return (
        <div>
            <h2 onClick={(e) => props.toggleComplete(e, props.id)}className={props.completed ? "completed" : ''}>{props.item}</h2>
        </div>
    )
}

export default Items;