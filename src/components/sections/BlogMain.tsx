import { Suspense } from "react";

import { BlogProps } from "@/types/types";
import { getBlogs } from "@/utils/getData";
import { BlogItem } from "../lib/helper";

const BlogMain = async () => {
	const blogs = await getBlogs();

	return (
		<main className="lg:col-span-3 md:col-span-2">
			<Suspense fallback={<h2>Loading...</h2>}>
				<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
		</main>
	);
};

export default BlogMain;
