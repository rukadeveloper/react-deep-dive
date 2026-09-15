import { useState, useEffect } from "react"

export default function TaskItem({ state, toggle, updatePriority, deleteItem }) {
    const [selected, setSelected] = useState('medium')

    useEffect(() => {
        updatePriority(state.id, selected)
    },[selected])
    
    return (
        <div style={{ width: '500px', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" checked={state.isComplete} onChange={() => toggle(state.id)} />
            <p style={{ marginTop: '14px', marginLeft: '10px' }}>{state.input}</p>
            <select style={{ marginLeft: '10px'}} value={state.priority} onChange={(e) => setSelected(e.target.value)} disabled={state.isComplete}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button style={{ marginLeft: '20px'}} onClick={() => {deleteItem(state.id)}}>삭제</button>
        </div>
    )
}