import { useState } from "react";
import { NavLink } from "react-router-dom";
import Arrow from "../../svgs/Arrow";

interface NavItem {
	name: string;
	link: string;
}

const Sidebar: React.FC = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const navItems: NavItem[] = [
		{
			name: "Dashboard",
			link: "/",
		},
		{
			name: "Tasks",
			link: "/tasks",
		},
		{
			name: "Profile",
			link: "/profile",
		},
		{
			name: "Settings",
			link: "/settings",
		},
	];

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div
			className={`bg-white h-auto relative flex flex-col justify-between pb-[90px] transition-width duration-500 ease-in-out ${
				isCollapsed ? "w-0" : "w-[350px]"
			}`}>
			<button
				onClick={toggleSidebar}
				className={`bg-black h-10 w-10 rounded-full hidden lg:flex items-center justify-center text-white transition-all duration-500 ease-in-out absolute  ${
					isCollapsed
						? "right-[-50px] top-[130px] rotate-180"
						: "right-[-10px] top-[130px]"
				}`}>
				<div className="w-2 flex items-center justify-center">
					<Arrow />
				</div>
			</button>
			<div className={`mt-[200px] w-full ${isCollapsed ? "hidden" : "block"}`}>
				<ul className="flex flex-col w-full">
					{navItems.map((item, index) => (
						<NavLink
							key={index}
							to={item.link}
							className={({ isActive }) =>
								`${
									isActive ? "active-link" : "hover:bg-gray-200"
								}  w-full px-[45px] h-[50px] py-3 font-normal`
							}>
							{item.name}
						</NavLink>
					))}
				</ul>
			</div>

			<div className={`w-full ${isCollapsed ? "hidden" : "block"}`}>
				<ul className="flex flex-col w-full">
					<NavLink
						to="/trash"
						className={({ isActive }) =>
							`${
								isActive ? "active-link" : ""
							} hover:bg-gray-200 w-full px-[45px] h-[50px] py-3 font-normal`
						}>
						Trash
					</NavLink>

					<li className="px-[45px] h-[50px] py-3 font-normal">
						<button className="bg-none text-red-700">Logout</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
