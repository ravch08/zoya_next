import Image from "next/image";
import SocialIcons from "../features/SocialIcons";

const AboutMe = () => {
	return (
		<section>
			<div className="container grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center">
				<div className="flex col-span-2 flex-col">
					<span className="primary-span">LIFESTYLE BLOGGER</span>
					<h1 className="pb-4 pt-4 text-5xl">Hi, I am Carolyn!</h1>
					<p className="font-serif text-xl">
						Ex azum san pericula usu an, in pri dolorum denique. Cu movet debitis cum. Vix paulo
						evertitur cu, conceptam constituam te his, meis euismod sed ad. Partem suscipit cu cum.
						Vix no prodesset complectitur conclud aturque, dicam perfecto eu per, ne vis eleifend
						expetenda. Idque petentium laboramus mea id, mei at.
					</p>

					<p className="p-12 font-serif text-3xl italic text-primary-600">
						Venenatis faucibus. Nullam quis ante. Curabitur ullamcorper ultricies vitae nisi etiam
						sit amet. Orci eget eros sapien ut libero?
					</p>

					<p className="font-serif text-xl">
						Ex mea oratio evertitur, mediocrem principes no has. Quodsi copiosae vel eu. Te rebum
						diceret gloriatur sea, dolorum fabellas vulputate has ex, mea similique posidonium
						persequeris at. Et dicat referrentur usu. Te cum saperet inimicus. Vix paulo evertitur
						cu, conceptam constituam te his, meis euismod sed ad. Partem suscipit cu cum. Vix no
						prodesset complectitur conclud aturque, dicam perfecto eu per, ne vis eleifend
						expetenda. Idque petentium laboramus mea id, mei at minim labores tollit enim singulis
						instructior his dicant fabulas.
					</p>

					<hr className="mt-12" />
				</div>

				<Image alt="user" width={300} height={300} src="/assets/user.png" className="col-span-1" />
			</div>

			<div className="container pt-8 flex items-center gap-4">
				<p className="font-serif text-base">Follow Us:</p>
				<SocialIcons fillColor="black" />
			</div>
		</section>
	);
};

export default AboutMe;
