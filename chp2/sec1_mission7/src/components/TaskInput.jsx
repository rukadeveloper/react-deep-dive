import { useState } from "react"

export default function TaskInput({ addItem }) {
    const [value, setValue] = useState('')

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => { addItem(value); setValue('');
                
             }}>추가하기</button>
        </div>
    )
}