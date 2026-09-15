import { useState, useEffect, useRef } from "react"
import { MdDelete, MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md"

export default function TaskItem({ state, toggle, updatePriority, deleteItem }) {
    const [selected, setSelected] = useState('medium')

    useEffect(() => {
        updatePriority(state.id, selected)
    }, [selected])

    return (
        <div className="taskItem" style={{ width: '500px', display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" checked={state.isComplete} onChange={() => toggle(state.id)} style={{ display: 'none' }} />
            {state.isComplete ? <MdRadioButtonChecked onClick={() => toggle(state.id)} style={{ opacity: '0.5' }} /> : <MdRadioButtonUnchecked onClick={() => toggle(state.id)} />}
            <p style={{ marginTop: '12px', marginLeft: '10px', opacity: state.isComplete ? '0.5' : '1' }} className={`${state.isComplete ? 'lineThrough' : ''}`}>{state.input}</p>
            <select style={{ marginLeft: '10px' }} value={state.priority} onChange={(e) => setSelected(e.target.value)} disabled={state.isComplete}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button style={{ marginLeft: '20px', backgroundColor: 'transparent', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                onClick={() => { deleteItem(state.id) }}
                disabled={state.isComplete}
            >
                <MdDelete />
            </button>
        </div>
    )
}