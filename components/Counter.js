import { useState } from 'react'

export default function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial)

  function increment() {
    setCount(c => c + 1)
  }
  function decrement() {
    setCount(c => c - 1)
  }
  function reset() {
    setCount(initial)
  }

  return (
    <div>
      <p>Current count: <strong>{count}</strong></p>
      <div style={{display:'flex', gap:8}}>
        <button onClick={decrement} aria-label="decrement">-</button>
        <button onClick={increment} aria-label="increment">+</button>
        <button onClick={reset} aria-label="reset">Reset</button>
      </div>
    </div>
  )
}
