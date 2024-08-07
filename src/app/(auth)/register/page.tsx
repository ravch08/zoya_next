import Link from "next/link";
import { PageBanner } from "../../../components/utils/helper";

export const metadata = {
	title: "Register | Zoya's Traveling Blog",
};

const Register = () => {
	return (
		<main>
			<PageBanner
				title="REGISTER"
				imgSrc="/assets/banner-03.jpg"
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit doloribus eligendi asperiores."
			/>
			<div className="container">
				<section className="mx-auto w-[60%]">
					<h2 className="mb-8 text-4xl">Register</h2>

					<form>
						<div className="form-control">
							<label htmlFor="name" className="mb-2 text-sm">
								Name
							</label>
							<input type="text" id="name" className="form-input" />
						</div>

						<div className="form-control">
							<label htmlFor="email" className="mb-2 text-sm">
								Email *
							</label>
							<input autoFocus id="email" type="email" className="form-input" />
						</div>

						<div className="form-control">
							<label htmlFor="password" className="mb-2 text-sm">
								Password *
							</label>
							<input type="password" id="password" className="form-input" />
						</div>

						<div className="flex flex-col">
							<a href="#!" className="btn-submit">
								SUBMIT
							</a>
							<Link href="/login" className="btn-link">
								LOG IN
							</Link>
						</div>
					</form>
				</section>
			</div>
		</main>
	);
};

export default Register;
