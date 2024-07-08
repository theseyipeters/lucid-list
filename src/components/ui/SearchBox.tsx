import SearchIcon from "../../svgs/SearchIcon";

const SearchBox = ({ placeholder }: any) => {
	return (
		<div className="h-[48px] flex flex-row gap-2 px-4 border items-center lg:min-w-[600px] rounded-lg">
			<button className="">
				<SearchIcon />
			</button>
			<input
				className="text-base placeholder:text-base w-full focus:outline-none "
				placeholder={placeholder}
				type={"text"}
			/>
		</div>
	);
};

export default SearchBox;
