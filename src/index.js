import React, { useReducer } from 'react';
import  ReactDOM  from 'react-dom/client';

function RR6 () {

    // @@@@@@@@@@@@@@@@ USE STATE

    // const [count,setCount] = useState(0)

    // const handleIncrement = () => {
    //     setCount(count + 1)
    // }

    // const handleDecrement = () => {
    //     setCount(count - 1)
    // }

    
    // return (
    // <div>
    //     <div>{`COUNT IS ${count}`}</div>
    //     <button onClick={handleIncrement}>+</button>
    //     <button onClick={handleDecrement}>-</button>
    // </div>
    // )
    

    // @@@@@@@@@@@@@@ USE REDUCE
// const [state,dispatch] = useReducer(reducer, {count:22})

// function reducer (state,action) {
//     if(action.type === "increment_age"){
//         return {
//             count: state.count +1
//         };
//     }
//     else if (action.type === "decrement_age"){
//         return {
//             count: state.count -1
//         };
//     }
    
//     throw Error('Unknown action')
// }


//@@@@@@@@@@@@@@@@@@@@@@@@ USE REDUCE ON SWITCH @@@@@@@@@@@@@@@@@@@@@


const [state,dispatch] = useReducer(reducer, {count:22})

function reducer (state,action) {
    switch(action.type) {
        case "increment_age": 
        return {count : state.count +1};
        case "decrement_age":
        return {count : state.count -1};
    default:
    throw Error('Unknown action')
}
}

return (
    <div>
        <div>{`COUNT IS ${state.count}`}</div>
        <button onClick={() => {dispatch({type: 'increment_age'})}}>+</button>
        <button onClick={() => {dispatch({type: 'decrement_age'})}}>-</button>
    </div>
)


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RR6 />)