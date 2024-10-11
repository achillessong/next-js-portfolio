/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/2048-in-react",
	output: "export", 
	reactStrictMode: true,
	webpack: (config) => {
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
};

module.exports = nextConfig;
