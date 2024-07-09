import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateTask from "../components/modals/CreateTask";
import Button from "../components/ui/Button";
import PlusIcon from "../svgs/PlusIcon";
import ListItem from "../components/ListItem";
import { RootState } from "../store";
import TaskDetail from "../components/TaskDetail";
import TaskDetail2 from "../components/TaskDetail2";
import TaskDetail3 from "../components/TaskDetail3";
import TaskModal from "../components/modals/TaskModal";

const Main = () => {
	const [isCreating, setIsCreating] = useState(false);
	const [selectedTask, setSelectedTask] = useState<number | null>(null);
	const tasks = useSelector((state: RootState) => state.tasks.tasks);

	console.log(tasks);

	const handleOpenCreateTask = () => setIsCreating(true);
	const handleCloseCreateTask = () => setIsCreating(false);

	const handleOpenTaskModal = (taskId: number) => setSelectedTask(taskId);
	const handleCloseTaskModal = () => setSelectedTask(null);

	const selectedTaskData = tasks.find((task) => task.id === selectedTask);

	return (
		<>
			<div className=" mt-[120px] mb-[20px] flex flex-col gap-8 border w-full mx-[20px] bg-white rounded-lg p-10 overflow-hidden">
				<div className="w-full flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
					<h1 className="text-2xl font-semibold">Welcome Jerry,</h1>

					<Button
						onClick={handleOpenCreateTask}
						className="hover:text-white/85 transition duration-300 ease-in-out bg-black w-full lg:w-fit text-white h-[45px] px-8 py-[13px] flex items-center justify-center rounded-full">
						<span className="flex flex-row items-center gap-3 w-full h-full">
							{" "}
							<PlusIcon />
							Create new task
						</span>
					</Button>
				</div>

				<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
					<TaskDetail tasks={tasks} />
					<TaskDetail2 tasks={tasks} />
					<TaskDetail3 tasks={tasks} />
				</div>

				<div className="flex flex-col gap-4 overflow-auto h-full">
					<div className="w-full flex flex-row items-center justify-between">
						<h1 className="text-lg font-medium">Recent tasks</h1>

						<Link
							to={"/"}
							className="text-teal-1 underline underline-offset-4 font-light">
							View all
						</Link>
					</div>
					<div className="h-full">
						{tasks.length === 0 ? (
							<div className="border border-black/30 rounded-2xl flex flex-col gap-3 h-full overflow-scroll items-center justify-center">
								<div className="flex flex-col gap-3 items-center justify-center">
									<h1>Your list is empty</h1>
									<Button
										onClick={handleOpenCreateTask}
										className="hover:text-white/85 transition duration-300 ease-in-out bg-black w-fit text-white h-[45px] px-8 py-[13px] flex items-center justify-center rounded-full">
										<span className="flex flex-row items-center gap-3 w-full h-full">
											{" "}
											<PlusIcon />
											Create new task
										</span>
									</Button>
								</div>
							</div>
						) : (
							<div className="flex flex-col gap-3 h-full overflow-scroll">
								{tasks.map((task) => (
									<div
										className="cursor-pointer hover:text-black/40 transition-all duration-300 ease-in-out"
										onClick={() => handleOpenTaskModal(task.id)}>
										<ListItem
											key={task.id}
											task={task}
										/>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>

			{isCreating && <CreateTask onClose={handleCloseCreateTask} />}
			{selectedTaskData && (
				<TaskModal
					task={selectedTaskData}
					onClose={handleCloseTaskModal}
				/>
			)}
		</>
	);
};

export default Main;
