import { useState } from 'react'

export default function Todo() {
  const [items, setItems] = useState([])
  const [text, setText] = useState('')

  function addItem(e) {
    e.preventDefault()
    if (!text.trim()) return
    setItems(prev => [...prev, { id: Date.now(), text: text.trim(), done: false }])
    setText('')
  }

  function toggleDone(id) {
    setItems(prev => prev.map(it => it.id === id ? { ...it, done: !it.done } : it))
  }

  function clearCompleted() {
    setItems(prev => prev.filter(it => !it.done))
  }

  return (
    <div>
      <form onSubmit={addItem} style={{marginBottom:12}}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="New todo..." />
        <button type="submit">Add</button>
      </form>

      {items.length === 0 ? (
        <p className="muted">No todos yet — add one to get started.</p>
      ) : (
        <ul className="todo-list">
          {items.map(it => (
            <li key={it.id} className={it.done ? 'done' : ''}>
              <label>
                <input type="checkbox" checked={it.done} onChange={() => toggleDone(it.id)} />
                <span>{it.text}</span>
              </label>
            </li>
          ))}
        </ul>
      )}

      <div style={{marginTop:10}}>
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  )
}
