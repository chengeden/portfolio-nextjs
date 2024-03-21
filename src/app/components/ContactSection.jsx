"use client";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					to_name: "Eden",
					from_name: data.email,
					email: data.email,
					subject: data.subject,
					message: data.message,
				},
				{ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY })
			.then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					if (response.status = 200) {
						e.target.reset();
						setEmailSubmitted(true);
					}
				},
				(error) => {
					console.log('FAILED...', error);
				},
			);
	};

	setTimeout(() => {
		setEmailSubmitted(false);
	}, 5000);

	return (
		<section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
			<div className="z-10">
				<h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="https://github.com/chengeden" passHref legacyBehavior>
						<a target="_blank">
							<Image src={GithubIcon} alt="Github Icon" />
						</a>
					</Link>
					<Link href="https://linkedin.com/in/eden-cheng" passHref legacyBehavior>
						<a target="_blank">
							<Image src={LinkedinIcon} alt="Linkedin Icon" />
						</a>
					</Link>
				</div>
			</div>
			<div>
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<div className="mb-6">
						<label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
						<input
							name="email"
							type="email"
							id="email"
							required
							placeholder="example@gmail.com"
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
						<input
							name="subject"
							type="text"
							id="subject"
							required
							placeholder="Just saying hi"
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
						<textarea
							name="message"
							id="message"
							placeholder="Let's talk about..."
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
						/>
					</div>
					<button
						type="submit"
						className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Send Message
					</button>
					{emailSubmitted && (
						<p className="text-green-500 text-sm mt-2">
							Email sent successfully!
						</p>
					)}
				</form>
			</div>
		</section>
	);
};

export default ContactSection;