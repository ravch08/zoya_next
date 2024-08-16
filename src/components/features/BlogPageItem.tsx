import { BlogProps } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const BlogPageItem = ({ imgSrc, title, category, description }: BlogProps) => {
	return (
		<div className="mb-6 w-full">
			<div className="my-10 bg-white text-center text-xs">
				<span className="blog-superHeading">
					<Link href={`/categories/${category.toLowerCase()}`}>{category}</Link>
				</span>
				<h2 className="mb-6 mt-3 text-5xl">{title}</h2>
				<p className="sub-heading flex gap-3 text-xs text-gray-800 transition-colors duration-500 ease-in-out hover:text-primary-600">
					<span>MARCH 1, 2023</span>
					<span>|</span>
					<span>
						BY <Link href="#!">USER</Link>
					</span>
				</p>
			</div>

			<figure className="h-[460px] rounded-md overflow-hidden brightness-75">
				<Image src={imgSrc} alt={title} className="w-full" width={400} height={500} />
			</figure>

			<p className="py-4 text-base font-light leading-8 text-slate-600">{description}</p>

			<hr className="my-20" />
		</div>
	);
};

export default BlogPageItem;
