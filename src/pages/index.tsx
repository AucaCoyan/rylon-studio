import Head from "next/head";
import { Inter } from "next/font/google";

export default function Home() {
	return (
		<>
			<Head>
				<title>Rylon Studio</title>
				<meta name="description" content="Rylon Studio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main className="flex h-screen bg-primary-orange">
				<div className="m-auto text-6xl text-center text-secondary-violet">
					Sitio en contrucción
				</div>
			</main>
		</>
	);
}
