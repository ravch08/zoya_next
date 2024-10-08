import { PageBanner } from "../../components/lib/helper";

export const metadata = {
	title: "Contacts | My Traveling Blog",
};

const Contact = () => {
	return (
		<main>
			<PageBanner
				title="Contacts"
				imgSrc="/assets/banner-01.jpg"
				description="Excepturi sit esse magnam aliquam libero perspiciatis unde ipsa, rem praesentium cumque."
			/>
		</main>
	);
};

export default Contact;
