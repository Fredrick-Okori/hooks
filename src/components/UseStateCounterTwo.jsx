import React, {useState} from 'react'

function UseStateCounterTwo() {
const initialCount = 0
    const [count, setCount] = useState(initialCount)
  return (
      <div>
          
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(initialCount)}>Reset</button>
          <button onClick={() => setCount(count + 1)}>Increase</button>
          <button onClick={()=> setCount(count - 1)}>Decrease</button>
          
    </div>
  )
}

export default UseStateCounterTwo