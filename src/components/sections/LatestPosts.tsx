import { Suspense } from "react";

import { BlogProps } from "@/types/types";
import { getBlogs } from "@/utils/getData";
import { BlogItem, SectionHeading } from "../lib/helper";

const LatestPosts = async () => {
	const blogs = await getBlogs();

	return (
		<section aria-labelledby="Latest Posts">
			<div className="container">
				<SectionHeading date="APRIL 19, 2021" heading="Latest Posts" />

				<Suspense fallback={<h2>Loading...</h2>}>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogs.map((blog: BlogProps) => (
							<BlogItem
								key={blog.slug}
								slug={blog.slug}
								title={blog.title}
								imgSrc={blog.imgSrc}
								category={blog.category}
								description={blog.description}
							/>
						))}
					</div>
				</Suspense>
			</div>
		</section>
	);
};

export default LatestPosts;
