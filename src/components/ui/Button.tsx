export default function Button({ onClick, children, className }: any) {
	return (
		<div
			onClick={onClick}
			className={className}>
			<button>{children}</button>
		</div>
	);
}
