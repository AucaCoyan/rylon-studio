import Head from "next/head";
import Image from "next/image";
import LogoRylonStudio from "../../public/Logo rylonstudio con texto.png";
import Separador01 from "../../public/Separador01.png";

export default function Home() {
	return (
		<>
			<Head>
				<title>Rylon Studio</title>
				<meta name="description" content="Rylon Studio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main className="">
				<section className="flex  h-screen flex-col">
					<div className="m-auto">
						<Image
							src={LogoRylonStudio}
							alt="Logo Rylon Studio"
							width={412}
							height={140}
						/>
					</div>
					<div className="m-auto p-10 text-6xl text-center text-secondary-violet">
						Sitio en contrucción
					</div>
					<div className="mx-auto pb-0">
						<Image
							src={Separador01}
							alt="Separador de la primera sección"
							width={1500}
						/>
					</div>
				</section>
			</main>
		</>
	);
}
