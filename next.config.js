/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		typedRoutes: true,
	},
	images: {
		domains: ['wisey.app'],
	},
}

module.exports = nextConfig
