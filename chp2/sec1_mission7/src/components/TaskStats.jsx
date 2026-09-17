import { useEffect, useState } from "react"

export default function TaskStats({ state }) {
    const completedTask = state.filter(ele => ele.isComplete).length


    return (
        <div>
            <p>완료된 Task: {completedTask}</p>
        </div>
    )
}