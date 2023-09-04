import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <h5>Updating names with Spread</h5>
            <input
                type='text'
                value={name.firstName}
                onChange={e => setName({...name, firstName: e.target.value })}
            /><br />
            <input
                type='text'
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            />
            <h1>Your name is: {name.firstName} {" "} {name.lastName}</h1>

        </div>
    )
}

export default HookCounterThree