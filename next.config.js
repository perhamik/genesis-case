module.exports = {
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'wisey.app',
				port: '',
				pathname: '/assets/images/**',
			},
		],
	},
}
