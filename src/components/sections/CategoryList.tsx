import Link from "next/link";

import Image from "next/image";
import { categories } from "../lib/data";
import { SectionHeading } from "../lib/helper";

const CategoryList = () => {
	return (
		<section aria-labelledby="Categories">
			<div className="container mx-auto">
				<SectionHeading heading="Categories" />
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
					{categories?.map((item) => (
						<div key={item.id} className="flex flex-col gap-3 items-center">
							<figure className="w-[150px] h-[150px] rounded-full overflow-hidden  group">
								<Image
									height={150}
									width={150}
									src={item.imgSrc}
									alt={item.category}
									className="scale-100 group-hover:scale-110 transition-all ease-in-out duration-500"
								/>
							</figure>
							<Link href={item.link} className="uppercase text-sm tracking-wider text-primary-400">
								{item.category}
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CategoryList;
