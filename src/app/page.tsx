import {
	Banner,
	BannerQuote,
	InstaPosts,
	LatestPosts,
	Newsletter,
	PopularPosts,
} from "../components/utils/helper";

export default function Home() {
	return (
		<main>
			<Banner />
			<LatestPosts />
			<BannerQuote />
			<PopularPosts />
			<Newsletter />
			<InstaPosts />
		</main>
	);
}
