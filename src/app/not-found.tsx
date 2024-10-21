import Link from "next/link";

const Page404 = () => {
	return (
		<main>
			<section aria-labelledby="Page Not Found">
				<h1>404</h1>
				<h2>The Page You Are Looking Is Not Found</h2>
				<p>
					The page you are looking for does not exist. It may have been moved, or removed
					altogether. Perhaps you can return back to the site's homepage and see if you can find
					what you are looking.
				</p>
				<Link href="/">Back to Home</Link>
			</section>
		</main>
	);
};

export default Page404;
