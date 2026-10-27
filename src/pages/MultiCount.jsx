import React, { useReducer } from 'react'

const initialState = { count: 0 }

function Reducer(state, action) {
    switch (action.type) {
        case "increment": {
            return { count: state.count + 1 }
        }
        case "decrement": {
            return { count: state.count - 1 }
        }
        case "reset": {
            return initialState
        }
        case "incrementBy": {
            return { count: state.count + action.payload }
        }


    }
}

export default function MultiCount() {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>dec</button>
            <button onClick={() => 
                dispatch({ type: "incrementBy", payload:4 })}>Increment by 4</button>
        </div>
    )
}
