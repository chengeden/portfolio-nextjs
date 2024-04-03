"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import heroImage from "/public/images/hero-image.png";

const HeroSection = () => {
	const handleDownload = () => {
		//Using HTML | DOM Anchor Object
		//const pdfUrl = "resume.pdf";
		//const link = document.createElement("a");
		//link.href = pdfUrl;
		//link.download = "Eden-Resume.pdf";
		//document.body.appendChild(link);
		//link.click();
		//document.body.removeChild(link);

		// Using JavaScript fetch() method to get PDF file
		fetch("resume.pdf").then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);

				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "Eden-Resume.pdf";
				alink.click();
			});
		});
		// download a file from AWS S3 CDN (Cloudfront) to local https://learnreactui.dev/contents/how-to-download-a-file-in-react
	};

	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
				>
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hello, I&apos;m{" "}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								'Eden Cheng',
								1000,
								'Web Developer',
								1000,
								'Frontend Developer',
								1000,
								'Fullstack Developer',
								1000
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Enthusiastic fullstack developer with a passion for problem-solving and a keen eye for detail, committed to delivering high-quality, innovative solutions in web development.
						{/*I am a full stack developer with a strong passion for creating dynamic and user-friendly web applications, adept at leveraging both front-end and back-end technologies to bring ideas to life.*/}
						{/*As a full stack developer, I am dedicated to utilizing my skills in both front-end and back-end technologies to contribute innovative solutions and drive projects forward with a passion for continuous learning and growth.*/}
					</p>
					<div>
						<Link
							href="/#contact"
							className="px-6 py-3 inline-block w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
							Hire Me
						</Link>
						<button onClick={handleDownload} className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-tertiary-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
						</button>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0"
				>
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src={heroImage}
							alt="hero image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;