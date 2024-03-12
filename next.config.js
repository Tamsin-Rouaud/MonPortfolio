// next.config.js
module.exports = {
	async headers() {
		return [
			{
				source: '/static/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400', // Exemple : cache pendant 24 heures
					},
				],
			},
		];
	},
};
