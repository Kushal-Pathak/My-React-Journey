import { useCounter } from "./my-hooks/useCounter"
export default function Counter(){
    const [count, increase, decrease, reset] = useCounter(0)
    return <div>
        <h1>Count: {count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
    </div>
}