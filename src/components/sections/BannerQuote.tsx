const BannerQuote = () => {
	return (
		<section aria-labelledby="Quote">
			<div className="container">
				<div className="relative rounded-lg bg-primary-100 px-12 py-20 text-center">
					<svg
						className="absolute left-32 top-0 z-0 w-48 opacity-30"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g>
							<path
								fill="#FFFFFF"
								d="M60.08,5.59c-22.4,17.2-28.4,44.4-21.6,45.2c8.8,0.8,18,3.6,25.2,10.4c14.8,14.4,14.8,38.4,0.4,53.2 c-14.4,14.4-38.4,14.4-52.8,0c-22.4-22.8-3.6-62.4,9.6-82c5.6-8.4,16.8-21.2,35.6-31.6L60.08,5.59z M165.28,5.59 c-22,17.2-28.4,44.4-21.6,45.2c9.2,0.8,18,3.6,25.2,10.4c14.8,14.4,15.2,38.4,0.4,53.2c-14.4,14.4-38,14.4-52.4,0 c-22.8-22.8-3.6-62.4,9.2-82c6-8.4,17.2-21.2,35.6-31.6L165.28,5.59z"
							></path>
						</g>
					</svg>

					<p className="relative z-10 mx-auto mb-6 w-[70%] font-serif text-4xl italic text-white">
						&quot; Quality content with useful info and some of the best services I have
						experienced. Recommend it to all. &quot;
					</p>
					<span className="font-serif uppercase tracking-wider">BY JOSEPHINA ROBINSON</span>
				</div>
			</div>
		</section>
	);
};

export default BannerQuote;
