import Image from "next/image";
import Link from "next/link";

import { BlogpostProps } from "../../types/types";
import { Button } from "../lib/helper";

const BlogPageItem = ({ id, imgSrc, author, heading, category, description }: BlogpostProps) => {
	return (
		<div className="mb-6 w-full">
			<div className="my-10 bg-white text-center text-xs">
				<span className="blog-superHeading">
					<Link href="#!">{category}</Link>
				</span>
				<h2 className="mb-6 mt-3 text-5xl transition-colors duration-500 ease-in-out hover:text-primary-600">
					<Link href={`/blogs/${id}`}>{heading}</Link>
				</h2>
				<p className="sub-heading flex gap-3 text-xs text-gray-800 transition-colors duration-500 ease-in-out hover:text-primary-600">
					<span>MARCH 1, 2023</span>
					<span>|</span>
					<span>
						BY <Link href="#!">{author}</Link>
					</span>
				</p>
			</div>

			<figure className="h-[460px]  overflow-hidden brightness-75">
				<Image src={imgSrc} alt={heading} className="w-full" width={400} height={500} />
			</figure>

			<p className="py-4 text-base font-light leading-8 text-slate-600">{description}</p>

			<div className="flex items-center justify-between gap-4">
				<Button target={`/blogs/${id}`} btnText="READ MORE" />
				<Link href="#!" className="flex items-center gap-2">
					<svg
						viewBox="0 0 24 24"
						className="h-4 w-4 fill-black"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
							clipRule="evenodd"
						/>
					</svg>

					<span className="text-sm uppercase tracking-wider">SHARE</span>
				</Link>
			</div>

			<hr className="my-20" />
		</div>
	);
};

export default BlogPageItem;
