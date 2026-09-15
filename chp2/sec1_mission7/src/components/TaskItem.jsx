export default function TaskItem({ state, toggle }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" checked={state.isComplete} onChange={() => toggle(state.id)} />
            <p style={{ marginTop: '10px' }}>{state.input}</p>
        </div>
    )
}