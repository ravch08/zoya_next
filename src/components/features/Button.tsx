import Link from "next/link";
import { ButtonProps } from "../../types/types";

const Button = ({ btnText, target }: ButtonProps) => {
	return (
		<Link
			href={target}
			className="mt-8 inline-block bg-gray-900 px-12 py-4 text-xs text-white duration-500 ease-in-out hover:bg-gray-700"
		>
			{btnText}
		</Link>
	);
};

export default Button;
