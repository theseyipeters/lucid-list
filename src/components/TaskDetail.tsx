import React from "react";

interface TaskDetailProps {
	tasks: { id: number; title: string; description: string; status: string }[];
}

const TaskDetail: React.FC<TaskDetailProps> = ({ tasks }) => {
	return (
		<div className="w-full bg-black text-white h-[197px] rounded-2xl px-[27px] my-auto flex items-center">
			<div className="flex flex-col">
				<h1 className="text-6xl">{tasks.length < 1 ? "-" : tasks.length}</h1>
				<p className="font-light">Total tasks</p>
			</div>
		</div>
	);
};

export default TaskDetail;
