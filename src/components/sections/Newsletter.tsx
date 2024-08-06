import Link from "next/link";

const Newsletter = () => {
	return (
		<>
			<section aria-labelledby="Newsletter">
				<div className="container mx-auto">
					<div className="flex flex-col justify-center py-20 rounded-lg items-center bg-gray-100">
						<h2 className="text-4xl mb-4 text-center">Subscribe now to get daily updates</h2>
						<p className="text-sm text-gray-500 w-1/2 mx-auto text-center mb-12">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolor, deleniti
							dolores est eius quisquam facilis expedita et quasi molestias.
						</p>

						<form className="flex w-2/3">
							<input
								id="email"
								type="email"
								placeholder="Enter your email here"
								className="py-3 px-4 text-sm border-none font-sans outline-none placeholder:text-sm w-full"
							/>
							<Link href="#!" className="btn btn-dark">
								Subscribe
							</Link>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Newsletter;
