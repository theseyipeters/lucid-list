import React from "react";

interface TaskDetail3Props {
	tasks: { id: number; title: string; description: string; status: string }[];
}

const TaskDetail3: React.FC<TaskDetail3Props> = ({ tasks }) => {
	const completedTasks = tasks.filter((task) => task.status === "completed");

	return (
		<div className="w-full bg-green-1 text-green-2 h-[197px] rounded-2xl px-[27px] my-auto flex items-center">
			<div className="flex flex-col">
				<h1 className="text-6xl">
					{completedTasks.length < 1 ? "-" : completedTasks.length}
				</h1>
				<p className="font-light">Completed tasks</p>
			</div>
		</div>
	);
};

export default TaskDetail3;
