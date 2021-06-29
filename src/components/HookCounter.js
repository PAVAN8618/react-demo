import React, {useState} from 'react'

function HookCounter() {
    const initialcount = 0
    count [count, setcount] =useState(initialcount)
    return (
        <div>
            count: {count}
            <button onClick={() => setcount(initialcount)}> Reset</button>
            <button onClick={() => setcount(count+1)}>Increment</button>
            <button onClick={() =>setcount(count-1)}>decrement</button>
            
        </div>
    ) 
    
}
export default HookCounter