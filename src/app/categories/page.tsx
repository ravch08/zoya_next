import { PageBanner } from "../../components/lib/helper";

export const metadata = {
	title: "Categories | My Traveling Blog",
};

const Categories = () => {
	return (
		<main>
			<PageBanner
				title="Categories"
				imgSrc="/assets/banner-01.jpg"
				description="Excepturi sit esse magnam aliquam libero perspiciatis unde ipsa, rem praesentium cumque."
			/>
		</main>
	);
};

export default Categories;
