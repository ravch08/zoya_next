import {
	AboutMe,
	InstaPosts,
	MyAssistants,
	Newsletter,
	PageBanner,
} from "../../components/lib/helper";

export const metadata = {
	title: "About Zoya | My Traveling Blog",
};

const About = () => {
	return (
		<main>
			<PageBanner
				title="ABOUT ZOYA"
				imgSrc="/assets/banner-02.jpg"
				description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut consectetur nulla ullam!"
			/>
			<AboutMe />
			<MyAssistants />
			<Newsletter />
			<InstaPosts />
		</main>
	);
};

export default About;
