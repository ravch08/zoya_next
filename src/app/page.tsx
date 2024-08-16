import {
	Banner,
	BannerQuote,
	CategoryList,
	InstaPosts,
	LatestPosts,
	Newsletter,
	PopularPosts,
} from "../components/lib/helper";

export default function Home() {
	return (
		<main>
			<Banner />
			<CategoryList />
			<LatestPosts />
			<BannerQuote />
			<PopularPosts />
			<Newsletter />
			<InstaPosts />
		</main>
	);
}
