import React from "react";

interface InputFieldProps {
	placeholder: string;
	onClick?: React.MouseEventHandler<HTMLInputElement>;
	type: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	value: string;
	name: string;
}

const InputField: React.FC<InputFieldProps> = ({
	placeholder,
	onClick,
	type,
	onChange,
	value,
	name,
}) => {
	return (
		<div className="w-full">
			<div className="w-full h-fit border-b mt-[13px] flex flex-row justify-between items-center">
				<input
					type={type}
					onChange={onChange}
					placeholder={placeholder}
					value={value}
					name={name}
					onClick={onClick}
					className="border-none w-full h-[48px] font-matter py-5 bg-transparent placeholder:text-black/30 focus:outline-none text-base text-white-1"
				/>
			</div>
		</div>
	);
};

export default InputField;
