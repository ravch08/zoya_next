import { PageBanner } from "../../../components/lib/helper";

export const metadata = {
	title: "Forgot Password | Zoya's Traveling Blog",
};

const ForgotPassword = () => {
	return (
		<main>
			<PageBanner
				title="Forgot Password"
				imgSrc="/assets/banner-03.jpg"
				description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit doloribus eligendi asperiores."
			/>
		</main>
	);
};

export default ForgotPassword;
