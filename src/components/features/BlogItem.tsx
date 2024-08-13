import Image from "next/image";
import Link from "next/link";

import { BlogpostProps } from "../../types/types";

const BlogItem = ({ id, imgSrc, author, heading, category, description }: BlogpostProps) => {
	return (
		<div className="mb-6 w-[30%]">
			<Link href={`/blogs/${id}`}>
				<figure className="h-64 w-full overflow-hidden rounded-md">
					<Image
						width={600}
						height={400}
						src={imgSrc}
						alt={heading}
						className="translate-y-0 w-full transition-transform duration-300 ease-in-out hover:-translate-y-2"
					/>
				</figure>
			</Link>
			<div className="bg-white px-4 py-6 text-center text-xs">
				<span className="blog-superHeading">
					<Link href="#!">{category}</Link>
				</span>
				<h3 className="pt-1 pb-3 text-3xl transition-colors duration-500 ease-in-out hover:text-primary-600">
					<Link href={`/blogs/${id}`}>{heading}</Link>
				</h3>
				<span className="sub-heading text-xs text-gray-600 font-medium transition-colors duration-500 ease-in-out hover:text-primary-600">
					<Link href="#!">{author}</Link>
				</span>
			</div>
		</div>
	);
};

export default BlogItem;
