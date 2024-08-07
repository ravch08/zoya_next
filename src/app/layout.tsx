import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer, Header } from "../components/utils/helper";

import "../styles/app.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Zoya | Traveling Blog",
	description: "Welcome to my blog where I share my traveling journey.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
