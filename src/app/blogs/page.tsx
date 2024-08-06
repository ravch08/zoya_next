import { BlogAside, BlogMain, PageBanner } from "../../components/utils/helper";

const Blogs = () => {
	return (
		<>
			<PageBanner
				title="Blogs"
				imgSrc="/assets/banner-03.jpg"
				description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, dignissimos!"
			/>
			<div className="container flex items-start justify-between gap-12 py-20">
				<BlogMain />
				<BlogAside />
			</div>
		</>
	);
};

export default Blogs;
