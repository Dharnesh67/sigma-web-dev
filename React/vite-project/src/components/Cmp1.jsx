import React, { useContext } from 'react'
import { countercontext } from '../context/context'

const Cmp1 = () => {
    const value = useContext(countercontext)
    return (
        <>
            <div>
                Cmp1
                <h1>{value.count}</h1>
                <button onClick={() => value.setCount(value.count + 1)}>click</button>
            </div></>
    )
}

export default Cmp1
