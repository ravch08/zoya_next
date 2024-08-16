import { BlogAside, BlogMain, PageBanner } from "../../components/lib/helper";

export const metadata = {
	title: "Blogs | My Traveling Blog",
};

const Blogs = () => {
	return (
		<main>
			<PageBanner
				title="Blogs"
				imgSrc="/assets/banner-03.jpg"
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, dignissimos!"
			/>
			<div className="container mx-auto py-16">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
					<BlogMain />
					<BlogAside />
				</div>
			</div>
		</main>
	);
};

export default Blogs;
