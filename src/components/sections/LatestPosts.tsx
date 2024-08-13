import { blogPosts } from "../lib/data";
import { BlogItem, SectionHeading } from "../lib/helper";

const LatestPosts = () => {
	const latestPosts = blogPosts.filter((post) => post.latest);

	return (
		<section aria-labelledby="Latest Posts">
			<div className="container">
				<SectionHeading date="APRIL 19, 2021" heading="Latest Posts" />

				<div className="flex flex-wrap items-center justify-between gap-8">
					{latestPosts?.map((blogpost) => (
						<BlogItem
							id={blogpost.id}
							key={blogpost.id}
							imgSrc={blogpost.imgSrc}
							author={blogpost.author}
							heading={blogpost.heading}
							category={blogpost.category}
							description={blogpost.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default LatestPosts;
