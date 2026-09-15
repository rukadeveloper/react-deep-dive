import { useReducer, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import taskReducer, { initialState } from "./store/tasks/taskReducer";
import { addTaskCreator } from "./store/tasks/taskActions";
import { TASK_ACTIONS } from "./store/tasks/taskTypes";
import TaskItem from "./components/TaskItem";

export default function App() {
    const [state, dispatch] = useReducer(taskReducer, initialState)

    const addItem = (input) => {
        dispatch({ type: TASK_ACTIONS.ADD_TASK, item: addTaskCreator(input) })
    }

    const toggleCheck = (id) => {
        dispatch({ type: TASK_ACTIONS.TOGGLE_TASK, id })
    }

    return (
        <div>
            <TaskInput addItem={addItem} />
            <div>
                {state.length > 0 && state.map(s => <TaskItem key={s.id} state={s} toggle={toggleCheck} />)}
            </div>
        </div>
    )
}