"use client";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => { return import("react-animated-numbers"); }, { ssr: false });

const AchievementsSection = () => {
	const achievementsList = [
		{
			metric: "Years of Experience",
			value: "2",
			postfix: "+",
		},
		{
			metric: "Projects Completed",
			value: "10",
			postfix: "+",
		},
		{
			metric: "Awards Received",
			value: "1",
		},
	];

	return (
		<div className="flex flex-row md:flex-col items-center justify-around h-full mt-10 md:mt-0 border-[#33353F] border rounded-md py-6 px-4 md:border-none md:py-0 md:px-0">
			{
				achievementsList.map((achievement, index) => {
					return (
						<div key={index} className="flex flex-col items-center justify-center sm:items-end sm:my-0">
							<h2 className="text-white text-4xl font-bold flex flex-row">
								<AnimatedNumbers
									includeComma
									animateToNumber={parseInt(achievement.value)}
									locale="en-US"
									className="text-white text-4xl font-bold"
									configs={(_, index) => {
										return {
											mass: 1,
											friction: 100,
											tensions: 140 * (index + 1),
										};
									}}
								/>
								{achievement.postfix}
							</h2>
							<p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
						</div>
					);
				})
			}
		</div>
	);
};

export default AchievementsSection;