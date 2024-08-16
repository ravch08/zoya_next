import Link from "next/link";

const Navlink = () => {
	// TEMPORARY
	const session = true;
	const isAdmin = true;

	return (
		<div className="flex items-center gap-4">
			{session ? (
				<>
					{isAdmin ? (
						<Link href="/admin" className="nav-link">
							Admin
						</Link>
					) : null}
					<button className="btn-sm btn-dark">Logout</button>
				</>
			) : (
				<Link href="login" className="btn-sm btn-dark">
					Login
				</Link>
			)}
		</div>
	);
};

export default Navlink;
