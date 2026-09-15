import { useState } from "react"

export default function TaskInput({ addItem }) {
    const [value, setValue] = useState('')

    const onKeyDown = (e) => {
        if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            addItem(value)
            setValue('')
        }
    }

    return (
        <div className="taskInput" style={{ display: 'flex', gap: '10px' }}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={onKeyDown} />
            <button onClick={() => { addItem(value); setValue('');}}>추가하기</button>
        </div>
    )
}