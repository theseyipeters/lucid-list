import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import CloseIcon from "../../svgs/CloseIcon";
import InputField from "../ui/InputField";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import { addTask } from "../../taskSlice";
import { AppDispatch } from "../../store";

interface CreateTaskProps {
	onClose: () => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({ onClose }) => {
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	const dispatch = useDispatch<AppDispatch>();

	const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(event.target.value);
	};

	const handleSave = () => {
		if (title.trim() && description.trim()) {
			dispatch(addTask({ title, description }));
			setTitle("");
			setDescription("");
			onClose();
		}
	};

	return (
		<div className="modal">
			<div
				onClick={onClose}
				className="absolute inset-0 bg-black opacity-80"></div>

			<div className="h-[400px] w-[40%] bg-white z-30 rounded-2xl p-10">
				<div className="flex flex-row items-center justify-between">
					<h2 className="text-xl font-semibold">Create new task</h2>
					<div onClick={onClose}>
						<CloseIcon />
					</div>
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

				<div className="flex flex-row w-full items-center justify-between mt-[50px]">
					<Button
						onClick={handleSave}
						className="ml-auto bg-black w-fit text-white h-[45px] px-8 py-[13px] flex items-center justify-center rounded-full">
						<span className="flex flex-row items-center gap-3 w-full h-full font-light">
							Save item
						</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateTask;
