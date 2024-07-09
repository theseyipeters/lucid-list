import React, { useState } from "react";
import LucidLogo from "../../svgs/LucidLogo";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "../ui/SearchBox";
import Dropdown from "../../svgs/Dropdown";
import MenuIcon from "../../svgs/MenuIcon";

interface HeaderProps {
	searchQuery: string;
	setSearchQuery: (value: string) => void;
}
interface NavItem {
	name: string;
	link: string;
	isClickable: boolean;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const navItems: NavItem[] = [
		{
			name: "Dashboard",
			link: "/",
			isClickable: true,
		},
		{
			name: "Tasks",
			link: "/tasks",
			isClickable: false,
		},
		{
			name: "Profile",
			link: "/profile",
			isClickable: false,
		},
		{
			name: "Settings",
			link: "/settings",
			isClickable: false,
		},
	];

	return (
		<header className="bg-white absolute top-0 z-20 w-full h-[100px] flex items-center justify-between border py-[20px] px-[20px] md:px-[50px]">
			<div className="flex flex-row items-center justify-between w-full ">
				<div className="flex flex-row">
					<div className="flex items-center">
						<Link
							to={"/"}
							className="">
							<LucidLogo />
						</Link>
					</div>

					<div className="hidden lg:flex ml-[110px]">
						<SearchBox
							placeholder={"Search for anything..."}
							value={searchQuery}
							onChange={setSearchQuery}
						/>
					</div>
				</div>

				<div className="hidden lg:flex flex-row items-center gap-4">
					<span className="w-[60px] h-[60px] rounded-full bg-black text-white flex items-center justify-center text-3xl">
						J
					</span>

					<div className="flex flex-col">
						<h4 className="text-lg font-medium">Jerry Nwosu</h4>
						<p className="text-sm tracking-[-0.24px] font-light">
							Sr. Software Engineer
						</p>
					</div>

					<div className="w-[30px]">
						<Dropdown />
					</div>
				</div>

				<button
					className="block lg:hidden"
					onClick={toggleMenu}>
					<MenuIcon />
				</button>
			</div>

			{showMenu && (
				<div className="lg:hidden absolute top-[100px] left-0 w-full bg-white shadow-md py-4 px-6 transition-height duration-1000 ease-in-out">
					<div className="w-full flex flex-col items-start gap-4">
						<SearchBox
							placeholder={"Search for anything..."}
							value={searchQuery}
							onChange={setSearchQuery}
						/>

						<div className={`mt-4 w-full`}>
							<ul className="flex flex-col w-full gap-4">
								{navItems.map((item, index) => (
									<NavLink
										key={index}
										to={item.link}
										className={` w-full px-[45px] h-[50px] py-3 font-normal ${
											item.isClickable
												? ""
												: "cursor-not-allowed hover:bg-transparent text-black/30"
										}`}
										onClick={(e) => {
											if (!item.isClickable) {
												e.preventDefault();
											}
										}}>
										{item.name}
									</NavLink>
								))}
							</ul>
						</div>

						<div className="ml-auto mt-[50px] flex flex-row items-center gap-4">
							<span className="w-[60px] h-[60px] rounded-full bg-black text-white flex items-center justify-center text-3xl">
								J
							</span>

							<div className="flex flex-col">
								<h4 className="text-lg font-medium">Jerry Nwosu</h4>
								<p className="text-sm tracking-[-0.24px] font-light">
									Sr. Software Engineer
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
