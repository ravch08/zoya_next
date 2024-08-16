import { getBlogs } from "@/utils/getData";
import { BlogProps } from "@/utils/model";
import { BlogItem, SectionHeading } from "../lib/helper";

const PopularPosts = async () => {
	const blogs = await getBlogs();

	return (
		<section aria-labelledby="Popular Posts">
			<div className="container">
				<SectionHeading date="APRIL 19, 2021" heading="Popular Posts" />

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
			</div>
		</section>
	);
};

export default PopularPosts;
