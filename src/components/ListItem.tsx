import React from "react";
import EditIcon from "../svgs/EditIcon";

interface Task {
	title: string;
	description: string;
	status: "pending" | "completed";
}

interface ListItemProps {
	task: Task;
}

const ListItem: React.FC<ListItemProps> = ({ task }) => {
	return (
		<div className="w-full border border-black/10 rounded-lg px-4 py-[10px] flex flex-row items-center justify-between">
			<h4
				className={`font-normal ${
					task.status === "completed"
						? "text-green-2 hover:text-green-2/50"
						: "text-yellow-2 hover:text-yellow-2/50"
				}`}>
				{task.title} -
				<span className="hidden lg:inline-block ml-2 text-gray-400 font-light text-sm">
					[{task.description}]
				</span>
			</h4>
			<div className="flex flex-row gap-4 items-center">
				<span
					className={`hidden md:block text-xs text-gray-400 capitalize px-5 py-2 rounded-full font-light ${
						task.status === "pending"
							? "bg-yellow-1 text-yellow-2"
							: "bg-green-1 text-green-2"
					}`}>
					{task.status}
				</span>

				<div className="flex flex-row gap-2 text-teal-1 hover:text-teal-1/50 transition-all duration-500 ease-in-out">
					<button className="w-[23px]">
						<EditIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
