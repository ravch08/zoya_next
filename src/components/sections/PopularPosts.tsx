import { blogPosts } from "../lib/data";
import { BlogItem, Button, SectionHeading } from "../lib/helper";

const PopularPosts = () => {
	const popularPosts = blogPosts?.filter((post) => post.popular);

	return (
		<section aria-labelledby="Popular Posts">
			<div className="container">
				<SectionHeading date="APRIL 19, 2021" heading="Popular Posts" />

				<div className="flex flex-wrap items-center justify-between gap-8">
					{popularPosts?.map((blogpost) => (
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

				<div className="text-center">
					<Button target="blogs" btnText="LOAD MORE" />
				</div>
			</div>
		</section>
	);
};

export default PopularPosts;
