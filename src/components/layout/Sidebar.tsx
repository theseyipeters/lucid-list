import { NavLink } from "react-router-dom";
import Arrow from "../../svgs/Arrow";

const Sidebar = () => {
	const navItems = [
		{
			name: "Dashboard",
			link: "/",
		},
		{
			name: "Tasks",
			link: "/",
		},
		{
			name: "Profile",
			link: "/",
		},
		{
			name: "Settings",
			link: "/",
		},
	];
	return (
		<div className="bg-white  w-[350px] h-full relative flex flex-col justify-between pb-[90px]">
			<button className="bg-black h-10 w-10 rounded-full flex items-center justify-center text-white absolute right-[-10px] top-[130px]">
				<div className="w-2 flex items-center justify-center">
					<Arrow />
				</div>
			</button>
			<div className="mt-[200px]">
				<ul>
					{navItems.map((item, index) => (
						<li
							key={index}
							className="px-[45px] h-[50px] py-3 font-normal">
							<NavLink to={"/"}>{item.name}</NavLink>
						</li>
					))}
				</ul>
			</div>

			<div>
				<ul>
					<li className="px-[45px] h-[50px] py-3 font-normal text-teal-1">
						<NavLink to={"/"}>Trash</NavLink>
					</li>

					<li className="px-[45px] h-[50px] py-3 font-normal">
						<button className="bg-none text-red-700"> Logout</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
