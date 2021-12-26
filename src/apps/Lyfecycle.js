import React, { useEffect, useState } from 'react'

const Lyfecycle = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(()=>{
        console.log('useEffect no dependency')
        return () =>{
            console.log('cleanup useEffect no dependency')
        }
    })

    useEffect(()=>{
        console.log('useEffect with dependency')
        return () =>{
            console.log('cleanup useEffect with dependency')
        }
    },[])

    useEffect(()=>{
        console.log('useEffect with dependency2')
        return () =>{
            console.log('cleanup useEffect with dependency2')
        }
    },[counter1])

    return (
        <div>
            <h1>Clicks c1: {counter1}</h1>
            <h1>Clicks c2: {counter2}</h1>
            <button onClick={() => setCounter1(counter1+1)}>
                Increment 1
            </button>
            <button onClick={() => setCounter2(counter2+1)}>
                Increment 2
            </button>
        </div>
    )
}

export default Lyfecycle
