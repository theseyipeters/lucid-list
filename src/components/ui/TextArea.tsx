import React from "react";

interface TextAreaProps {
	placeholder: string;
	onClick?: React.MouseEventHandler<HTMLTextAreaElement>;
	onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
	value: string;
	name: string;
}

const TextArea: React.FC<TextAreaProps> = ({
	placeholder,
	onClick,
	onChange,
	value,
	name,
}) => {
	return (
		<div className="w-full">
			<div className="w-full h-fit border-b mt-[13px] flex flex-row justify-between items-center">
				<textarea
					onChange={onChange}
					placeholder={placeholder}
					value={value}
					name={name}
					onClick={onClick}
					className="border-none w-full h-[118px] font-matter py-5 bg-transparent placeholder:text-black/30 focus:outline-none text-base text-white-1"
				/>
			</div>
		</div>
	);
};

export default TextArea;
