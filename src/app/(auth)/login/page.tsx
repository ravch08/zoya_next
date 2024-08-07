import Link from "next/link";
import { PageBanner } from "../../../components/utils/helper";

export const metadata = {
	title: "Login | Zoya's Traveling Blog",
};

const Login = () => {
	return (
		<main>
			<PageBanner
				title="LOGIN"
				imgSrc="/assets/banner-02.jpg"
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit doloribus eligendi asperiores."
			/>

			<div className="container">
				<div className="flex items-start justify-between">
					<section className="w-[50%]">
						<h2 className="mb-8 text-4xl">Login</h2>

						<form>
							<div className="form-control">
								<label htmlFor="email" className="mb-2 text-sm">
									Email *
								</label>
								<input type="email" id="email" className="form-input" autoFocus />
							</div>
							<div className="form-control">
								<label htmlFor="password" className="mb-2 text-sm">
									Password *
								</label>
								<input type="password" id="password" className="form-input" />
							</div>

							<a href="#!">Forgot your password?</a>
							<a href="#!" className="btn-submit">
								Submit
							</a>
						</form>
					</section>

					<section className="w-[40%]">
						<h2 className="mb-8 text-4xl">New Customer</h2>
						<p>
							Sign up for early Sale access plus tailored new arrivals, trends and promotions. To
							opt out, click unsubscribe in our emails.
						</p>
						<Link href="/register" className="btn-link">
							CREATE ACCOUNT
						</Link>
					</section>
				</div>
			</div>
		</main>
	);
};

export default Login;
