"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>JavaScript</li>
				<li>React</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>MongoDB</li>
				<li>HTML</li>
				<li>CSS</li>
			</ul>
		)
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Fullstack bootcamp</li>
				<li>University of Sydney, Sydney</li>
				<li>RMIT University, Melbourne</li>
			</ul>
		)
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>Fullstack Bootcamp</li>
				<li>University of Sydney, Sydney</li>
				<li>RMIT University, Melbourne</li>
			</ul>
		)
	}
];

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section id="about" className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
				<Image src="/images/about-image.png" width={500} height={500} alt="about image" />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, MongoDB, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a strong team player and I am excited to work with others to create amazing applications.
					</p>
					<div className="flex flex-row justify-start mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							Education
						</TabButton>						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
						>
							Certifications
						</TabButton>
					</div>
					<div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;