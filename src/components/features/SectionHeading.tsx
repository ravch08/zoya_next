import { SectionHeadingProps } from "../../types/types";

const SectionHeading = ({ date, heading }: SectionHeadingProps) => {
	return (
		<div className="text-center mb-12">
			<span className="text-gray-400">{date}</span>
			<h2 className="text-5xl pt-2 pb-8">{heading}</h2>
		</div>
	);
};

export default SectionHeading;
