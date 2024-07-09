import LucidLogo from "../../svgs/LucidLogo";
import { Link } from "react-router-dom";
import SearchBox from "../ui/SearchBox";
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

					<div className="hidden lg:flex ml-[110px]">
						<SearchBox placeholder={"Search for anything..."} />
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
			</div>
		</header>
	);
};

export default Header;
