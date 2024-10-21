import React from "react";
import Details from "./ExperienceDetails";
import BasicTabs from "./Tabs";

const Experience = () => {
	const LennarExperience = {
		companyName: "Lennar",
		role: "Senior Software Engineer",
		duration: "12/2022 - Present",
		activities: [
			"Developed and maintained Lennar’s codebase using React, Redux, Node.js, and TypeScript, contributing to robust and scalable solutions for internal and external users.",
			"Led mobile development for Lennar’s homebuyer platform, utilizing Kotlin, React Native, SwiftUI, Java, Objective-C, and Flutter to create engaging and efficient applications for both iOS and Android.",
			"Built reusable UI components and custom hooks to optimize rendering and improve application performance, ensuring a consistent user experience across platforms.",
			"Leveraged Apollo Client to integrate GraphQL APIs, optimizing client-server communication and reducing data load times.",
			"Incorporated Chart.js, D3.js, and Three.js to create interactive data visualizations and 3D experiences.",
			"Implemented map functionality with @react-google-maps/api to provide interactive location-based features.",
			"Deployed and scaled web applications using AWS infrastructure, managing deployment pipelines to maintain a stable production environment.",
			"Utilized Auth0 for user authentication and Optimizely for A/B testing, ensuring secure access and improving user engagement.",
			"Created unit and integration tests with Jest and React Testing Library, enhancing code quality and reliability for key UI components.",
		],
	};

	const EtsyExperience = {
		companyName: "Etsy",
		role: "Senior Software Engineer",
		duration: "10/2018 - 11/2022",
		activities: [
			"Developed reusable UI components for Etsy’s internal UI library using React, Redux, TypeScript, Rest APIs, and MUI, ensuring consistent design across all internal applications.",
			"Created dynamic Etsy dashboards integrating reusable UI library with React, Zustand, Spring Boot, Rest APIs, Typescript, PostgreSQL, and AWS, providing real-time operational insights for stakeholders.",
			"Built an internal CMS tool with React, Jotai, TypeScript, Applo GraphQL, and Tailwind CSS, simplifying content updates and enhancing efficiency for non-technical users. ",
			"Modularized the codebase using React, TypeScript, and Node.js, implementing a component-based architecture to enhance reusability, maintainability, and scalability.",
			"Optimized database queries in PostgreSQL and applied caching to enhance data access speed.",
			"Worked closely with designers to implement wireframes into functional, scalable UI components.",
			"Mentored junior developers in React, TypeScript, and state management, fostering their technical growth."
		],
	};

	const CognizantExperience = {
		companyName: "Cognizant",
		role: "Software Engineer",
		duration: "03/2015 - 10/2018",
		activities: [
			"Delivered a comprehensive Contract Lifecycle Management platform, resulting in enhanced efficiency and productivity in contract management for clients by up to 180%. Used React, React Native, MUI, TypeScript, Node.js, Java Spring Boot, Python on AWS and Azure cloud",
			"Contributed to high traffic mobile-first web application for Zipcar’s car-sharing platform ensuring user-friendly and efficient experience, facilitating car reservation and sharing, account management, and on-demand access for an expensive fleet across hundreds of cities using Angular and C# .NET",
			"Developed Walmart’s internal dashboard using PHP, Angular, and vanilla JavaScript, providing a streamlined interface for operational insights.",
		],
	};

	return (
		<div id="experience" className="w-full lg:h-screen p-2 ">
			<div
				className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
				data-aos="fade-right"
				data-aos-duration="1500"
			>
				<p className="text-xl tracking-widest uppercase text-primary">Experience</p>
				<h2 className="py-4">Where I&apos;ve Worked</h2>
				<div className="mt-2 ">
					<BasicTabs
						tabList={["Lennar", "Etsy", "Cognizant"]}
						tabPanel={[
							<Details key={"Lennar"} experienceDetails={LennarExperience} />,
							<Details key={"Etsy"} experienceDetails={EtsyExperience} />,
							<Details key={"Cognizant"} experienceDetails={CognizantExperience} />
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
