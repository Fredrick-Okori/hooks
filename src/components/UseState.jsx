import React, { useState } from 'react'


function UseState() {
const [count, setCount] = useState(0)

  return (
      <div>
          <h1>Count: { count}</h1>
          <button onClick={() => setCount(count + 1)}>Increasement</button>
          <button onClick={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

export default UseState