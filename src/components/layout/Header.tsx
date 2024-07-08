import LucidLogo from "../../svgs/LucidLogo";
import { Link, NavLink } from "react-router-dom";
import SearchBox from "../ui/SearchBox";
import avatar from "../../assets/avatar.svg";
import Dropdown from "../../svgs/Dropdown";

const Header = () => {
	return (
		<header className="bg-white absolute top-0 z-20 w-full h-[100px] flex items-center justify-between border py-[20px] px-[50px]">
			<div className="flex flex-row items-center justify-between w-full ">
				<div className="flex flex-row">
					<div className="flex items-center">
						<Link
							to={"/"}
							className="">
							<LucidLogo />
						</Link>
					</div>

					<div className="ml-[110px]">
						<SearchBox placeholder={"Search for anything..."} />
					</div>
				</div>

				<div className="heading-end flex flex-row gap-4">
					<div>
						<img
							src={avatar}
							alt="avatar"
						/>
					</div>
					<div className="flex flex-col">
						<h4 className="text-lg font-medium">Oluwaseyi Peter</h4>
						<p className="text-sm tracking-[-0.24px] font-light">
							Software Engineer
						</p>
					</div>

					<div className="w-[30px]">
						<Dropdown />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
