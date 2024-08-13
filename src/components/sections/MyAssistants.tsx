import { assistants } from "../lib/data";
import { AssistantItem } from "../lib/helper";

const MyAssistants = () => {
	return (
		<section aria-labelledby="My Assistants">
			<div className="container mx-auto">
				<h2 className="text-4xl mb-12">Assistants</h2>

				<div className="flex flex-col gap-4 items-start">
					{assistants?.map((assistant) => (
						<AssistantItem
							id={assistant.id}
							key={assistant.id}
							info={assistant.info}
							name={assistant.name}
							imgSrc={assistant.imgSrc}
							assistantCat={assistant.assistantCat}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default MyAssistants;
