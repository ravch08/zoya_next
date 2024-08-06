import Image from "next/image";

import { AssistantProps } from "@/types/types";

const AssistantItem = ({ id, name, assistantCat, info, imgSrc }: AssistantProps) => {
	return (
		<div
			className={`p-8 flex items-center gap-6 rounded-md ${
				id % 2 === 0 ? "bg-white" : "bg-red-50"
			}`}
		>
			<figure className="rounded-full overflow-hidden">
				<Image src={imgSrc} alt={name} className="w-full" width={140} height={140} />
			</figure>
			<div className="flex flex-col items-start gap-1">
				<span className="uppercase text-sm tracking-wider text-primary-400 font-sans">
					{assistantCat}
				</span>
				<h3 className="font-serif text-2xl font-semibold">{name}</h3>
				<p className="text-sm text-gray-500 leading-relaxed">{info}</p>
			</div>
		</div>
	);
};

export default AssistantItem;
