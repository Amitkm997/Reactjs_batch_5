import React from 'react'
import { createContext, useState } from 'react'

export const CounterContext = createContext();

export default function CounterProvider({ children }) {
    const [count, setCount] = useState(0);
    const increament = () => setCount((c) => c + 1)
    const decrement = () => setCount((c) => c - 1)
    return (
        <>
            <CounterContext.Provider value={{
                count,
                increament,
                decrement
            }}>
                {children}
            </CounterContext.Provider>
        </>
    )
}
