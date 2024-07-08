module.exports = {
	main: {
		input: './src/shared/api/api-yaml',
		output: {
			target: './src/shared/api/generated.ts',
			prettier: true,
			override: {
				mutator: {
					path: './src/shared/api/api-instance.ts',
					name: 'createInstance',
				},
			},
		},
	},
}
