import { BlogProps, ParamsProps } from "@/types/types";
import { getBlogs } from "@/utils/getData";
import { BlogItem, PageBanner } from "../../../components/lib/helper";

const Categories = async ({ params }: ParamsProps) => {
	const { slug } = params;
	const blogs = await getBlogs();

	const categoryBlogs = blogs?.filter((blog) => blog.category.toLowerCase() === slug);

	return (
		<main>
			<PageBanner
				key="categories"
				title={slug.toUpperCase()}
				imgSrc="/assets/banner-02.jpg"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab praesentium accusantium!"
			/>

			<section aria-label={slug}>
				<div className="container mx-auto py-20">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{categoryBlogs.length === 0 ? (
							<div className="flex flex-col gap-8">
								<span className="text-6xl font-black">OOPS!</span>
								<h2 className="text-xl ">There are no Blogs in this category! </h2>
							</div>
						) : null}
						{categoryBlogs?.map((blog: BlogProps) => (
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
		</main>
	);
};

export default Categories;
