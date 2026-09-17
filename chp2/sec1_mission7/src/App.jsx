import { useReducer, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import taskReducer, { initialState } from "./store/tasks/taskReducer";
import { addTaskCreator } from "./store/tasks/taskActions";
import { TASK_ACTIONS } from "./store/tasks/taskTypes";
import TaskItem from "./components/TaskItem";
import './App.css'
import TaskStats from "./components/TaskStats";

export default function App() {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    const PRIORITY_ORDER = { high: 0, medium: 1, low: 2 }

    const sortedState = [...state].sort((a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority])

    const addItem = (input) => {
        dispatch({ type: TASK_ACTIONS.ADD_TASK, item: addTaskCreator(input) })
    }

    const toggleCheck = (id) => {
        dispatch({ type: TASK_ACTIONS.TOGGLE_TASK, id })
    }

    const updatePriority = (id, priority) => {
        dispatch({ type: TASK_ACTIONS.UPDATE_PRIORITY, id, priority })
    }

    const deleteItem = (id) => {
        dispatch({ type: TASK_ACTIONS.DELETE_TASK, id })
    }

    return (
        <div id="wrap">
            <h1>Gemini Combination Dashboard</h1>
            <TaskStats state={state} />
            <TaskInput addItem={addItem} />
            <div>
                {state.length > 0 && sortedState.map(s => <TaskItem key={s.id} state={s} toggle={toggleCheck} updatePriority={updatePriority} deleteItem={deleteItem} />)}
            </div>
        </div>
    )
}