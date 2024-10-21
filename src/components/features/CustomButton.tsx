export type CustomButtonProps = {
	className?: string;
	disabled?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
	size?: "small" | "medium" | "large";
	variant?: "primary" | "secondary" | "outline";
};

const CustomButton = ({
	children,
	onClick,
	variant = "primary",
	size = "medium",
	disabled = false,
	className = "",
}: CustomButtonProps) => {
	const baseStyles = "rounded-sm focus:outline-none transition-colors duration-300 ease-in-out";

	const variantStyles = {
		primary: "bg-gray-900 text-white hover:bg-gray-300 hover:text-black",
		secondary: "bg-neutral-300 text-black hover:bg-neutral-900 hover:text-white",
		outline:
			"bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
	};

	const sizeStyles = {
		small: "py-1 px-4 text-sm",
		medium: "py-2 px-8 text-sm",
		large: "py-3 px-10 text-md",
	};

	return (
		<button
			onClick={onClick}
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default CustomButton;
