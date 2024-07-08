import React from "react";

interface TaskDetail2Props {
	tasks: { id: number; title: string; description: string; status: string }[];
}

const TaskDetail2: React.FC<TaskDetail2Props> = ({ tasks }) => {
	const pendingTasks = tasks.filter((task) => task.status === "pending");

	return (
		<div className="w-full bg-yellow-1 text-yellow-2 h-[197px] rounded-2xl px-[27px] my-auto flex items-center">
			<div className="flex flex-col">
				<h1 className="text-6xl">
					{pendingTasks.length < 1 ? "-" : pendingTasks.length}
				</h1>
				<p className="font-light">Pending tasks</p>
			</div>
		</div>
	);
};

export default TaskDetail2;
