import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskStatus, editTask } from "../../taskSlice";
import { AppDispatch } from "../../store";

import CloseIcon from "../../svgs/CloseIcon";
import InputField from "../ui/InputField";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import TrashIcon from "../../svgs/TrashIcon";
import Bookmark from "../../svgs/Bookmark";

interface TaskModalProps {
	task: {
		id: number;
		title: string;
		description: string;
		status: "pending" | "completed";
	};
	onClose: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose }) => {
	const [title, setTitle] = useState(task.title);
	const [description, setDescription] = useState(task.description);
	const dispatch = useDispatch<AppDispatch>();

	const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(event.target.value);
	};

	const handleEditTask = () => {
		if (title.trim() && description.trim()) {
			dispatch(editTask({ id: task.id, title, description }));
			onClose();
		}
	};

	const handleDeleteTask = () => {
		dispatch(deleteTask(task.id));
		onClose();
	};

	const handleToggleTaskStatus = () => {
		dispatch(toggleTaskStatus(task.id));
		onClose();
	};
	return (
		<div className="modal">
			<div
				onClick={onClose}
				className="absolute inset-0 bg-black opacity-80"></div>

			<div className="h-fit lg:h-[400px] w-[90%] lg:w-[60%] bg-white z-30 rounded-2xl p-10">
				<div className="flex flex-row items-center justify-between">
					<h2 className="text-xl font-semibold">Task</h2>
					<button onClick={onClose}>
						<CloseIcon />
					</button>
				</div>

				<div>
					<InputField
						placeholder="Task title"
						type="text"
						onChange={handleTitleChange}
						value={title}
						name="title"
					/>

					<TextArea
						placeholder="Task description"
						onChange={handleDescriptionChange}
						value={description}
						name="description"
					/>
				</div>

				<div className="mt-[50px] flex flex-col-reverse md:flex-row lg:flex-row gap-3 justify-between">
					<div className="w-full lg:w-fit flex flex-row justify-between lg:justify-normal">
						<Button
							onClick={handleDeleteTask}
							className="bg-red-700 text-white p-2 rounded-full mr-2 h-[45px] px-4 lg:px-8 py-[13px] flex items-center">
							<span className="flex flex-row items-center justify-center gap-2 text-white w-full h-full">
								<span className="w-[23px]">
									<TrashIcon />
								</span>
								<span className="hidden lg:inline-block">Move to trash</span>
							</span>
						</Button>
						<Button
							onClick={handleToggleTaskStatus}
							className={`${
								task.status === "completed"
									? "bg-yellow-1 text-yellow-2"
									: "bg-green-1 text-green-2"
							} rounded-full mr-2 h-[45px] px-4 lg:px-8 py-[13px] flex flex-row items-center justify-center`}>
							<span className="flex flex-row gap-2">
								<span className="w-[23px]">
									<Bookmark />
								</span>
								<span className="hidden lg:inline-block">
									{task.status === "pending"
										? "Mark as Completed"
										: "Mark as Pending"}
								</span>
							</span>
						</Button>
					</div>
					<Button
						onClick={handleEditTask}
						className="w-full md:w-fit lg:w-fit bg-teal-1 text-white p-2 rounded-full mr-2 h-[45px] px-8 py-[13px] flex items-center justify-center">
						Save
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TaskModal;
