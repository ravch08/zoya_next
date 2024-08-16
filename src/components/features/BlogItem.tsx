import Image from "next/image";
import Link from "next/link";

import { BlogProps } from "@/types/types";

const BlogItem = ({ slug, imgSrc, title, description, category }: BlogProps) => {
	return (
		<div>
			<Link href={`/blog/${slug}`}>
				<figure className="w-full overflow-hidden rounded-md">
					<Image
						width={600}
						height={400}
						alt={title}
						src={imgSrc}
						className="translate-y-0 w-full transition-transform duration-300 ease-in-out hover:-translate-y-2"
					/>
				</figure>
			</Link>
			<div className="bg-white px-4 py-6 text-center text-xs">
				<span className="blog-superHeading">
					<Link href={`/categories/${category.toLowerCase()}`}>{category}</Link>
				</span>
				<h3 className="pt-1 pb-3 text-2xl transition-colors duration-500 ease-in-out hover:text-primary-600">
					<Link href={`/blog/${slug}`}>{title}</Link>
				</h3>
				<p className="line-clamp-2 mb-2">{description}</p>
				<span className="sub-heading text-xs text-gray-600 font-medium transition-colors duration-500 ease-in-out hover:text-primary-600">
					<Link href="#!">user</Link>
				</span>
			</div>
		</div>
	);
};

export default BlogItem;
