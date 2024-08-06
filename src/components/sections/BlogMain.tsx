import { blogPosts } from "../utils/data";
import { BlogPageItem } from "../utils/helper";

const BlogMain = () => {
	return (
		<main className="w-[75%]">
			{blogPosts.map((blogPost) => (
				<BlogPageItem
					key={blogPost.id}
					id={blogPost.id}
					imgSrc={blogPost.imgSrc}
					author={blogPost.author}
					heading={blogPost.heading}
					category={blogPost.category}
					description={blogPost.description}
				/>
			))}
		</main>
	);
};

export default BlogMain;
