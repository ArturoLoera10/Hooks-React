import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "ADD_TODO",
            payload: todo,
        };

        dispatch(action);
    };

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: id,
        });
    };

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    };
};
