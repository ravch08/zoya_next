import Image from "next/image";
import Link from "next/link";

import { categories } from "../lib/data";

const BlogAside = () => {
	return (
		<aside className="col-span-1">
			<div className="rounded-md bg-orange-50 px-8 py-12">
				<Image src="/assets/user.png" alt="user" className="w-full " width={300} height={300} />

				<div className="mt-6 text-center">
					<h2 className="mb-4 font-sans text-primary-400">BLOGGER</h2>
					<p className="font-serif text-base">
						Welcome to my blog where I share my lifestyle tips, healthy snack ideas…
					</p>
				</div>
			</div>

			<div className="rounded-md bg-white px-8 py-12 text-center">
				<h2 className="mb-6 text-3xl">Categories</h2>
				<ul className="flex flex-col gap-2">
					{categories?.map((item) => (
						<li key={item.id}>
							<Link href={item.link} className="uppercase text-sm tracking-wider text-primary-400">
								{item.category}
							</Link>
						</li>
					))}
				</ul>
			</div>

			<Image
				width={500}
				height={500}
				alt="trending"
				className="w-full"
				src="/assets/small-banner.jpg"
			/>
		</aside>
	);
};

export default BlogAside;
