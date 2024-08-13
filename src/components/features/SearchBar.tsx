const SearchBar = () => {
	return (
		<div>
			<form>
				<label htmlFor="blogSearch" className="flex items-center">
					<input
						type="text"
						id="blogSearch"
						placeholder="SEARCH"
						className="placeholder:text-right placeholder:font-light placeholder:tracking-widest font-light tracking-widest	py-2 px-3 text-xs text-right border-none outline-none uppercase"
					/>
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-4 h-4"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
							clipRule="evenodd"
						/>
					</svg>
				</label>
			</form>
		</div>
	);
};

export default SearchBar;
