import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
	id: number;
	title: string;
	description: string;
	status: "pending" | "completed";
}

export interface TaskState {
	tasks: Task[];
}

const initialState: TaskState = {
	tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
};

const taskSlice = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (
			state,
			action: PayloadAction<{
				title: string;
				description: string;
				status: string;
			}>
		) => {
			const newTask: Task = {
				id: Date.now(),
				title: action.payload.title,
				description: action.payload.description,
				status: "pending", // Initial status set to 'pending'
			};
			state.tasks.push(newTask);
			localStorage.setItem("tasks", JSON.stringify(state.tasks));
		},
		toggleTaskStatus: (state, action: PayloadAction<number>) => {
			const task = state.tasks.find((task) => task.id === action.payload);
			if (task) {
				task.status = task.status === "pending" ? "completed" : "pending";
				localStorage.setItem("tasks", JSON.stringify(state.tasks));
			}
		},
		deleteTask: (state, action: PayloadAction<number>) => {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
			localStorage.setItem("tasks", JSON.stringify(state.tasks));
		},
		editTask: (
			state,
			action: PayloadAction<{ id: number; title: string; description: string }>
		) => {
			const task = state.tasks.find((task) => task.id === action.payload.id);
			if (task) {
				task.title = action.payload.title;
				task.description = action.payload.description;
				localStorage.setItem("tasks", JSON.stringify(state.tasks));
			}
		},
	},
});

export const { addTask, toggleTaskStatus, deleteTask, editTask } =
	taskSlice.actions;
export default taskSlice.reducer;
