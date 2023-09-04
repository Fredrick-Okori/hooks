import React, {useState} from 'react'

function YouHaveClicked() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    function handleIncrement() {
        setCount(count + 1);
    }
  return (
      <div>
          
         
          <input type='text' onChange={e => setName(e.target.value) }/>
          <button onClick={handleIncrement}>Increase</button>
          <h1>{name} has {count} notifications!</h1>
      </div>
  )
}

export default YouHaveClicked