import { ParamsProps } from "@/types/types";
import { BlogPageItem } from "../../../components/lib/helper";

const getBlog = async (slug: string) => {
	const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

	if (!res.ok) throw new Error("Something went wrong!");

	return await res.json();
};

export const generateMetadata = async ({ params }: ParamsProps) => {
	const { slug } = params;
	const blog = await getBlog(slug);

	return {
		title: blog.title,
		description: blog.description,
	};
};

const BlogDetail = async ({ params }: ParamsProps) => {
	const { slug } = params;
	const blog = await getBlog(slug);

	console.log(slug);

	return (
		<main>
			<section aria-labelledby="Blog Details" className="border-t border-slate-200 py-8">
				<div className="container mx-auto">
					<BlogPageItem
						slug={blog.slug}
						title={blog.title}
						imgSrc={blog.imgSrc}
						category={blog.category}
						description={blog.description}
					/>
				</div>
			</section>
		</main>
	);
};

export default BlogDetail;
