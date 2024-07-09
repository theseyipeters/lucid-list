import React from "react";
import SearchIcon from "../../svgs/SearchIcon";

interface SearchBoxProps {
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
	placeholder,
	value,
	onChange,
}) => {
	return (
		<div className="h-[48px] flex flex-row gap-2 px-4 border items-center w-full lg:w-[400px] xl:min-w-[600px] rounded-lg">
			<SearchIcon />

			<input
				className="text-base placeholder:text-base w-full focus:outline-none"
				placeholder={placeholder}
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	);
};

export default SearchBox;
