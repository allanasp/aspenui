module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'prettier/prettier': ['error', { singleQuote: true, semi: false }],
		'@typescript-eslint/no-unused-vars': 'error',
	},
	ignorePatterns: ['dist/', 'node_modules/'],
	overrides: [
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			extends: [
				'plugin:vue/vue3-recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:prettier/recommended',
			],
			rules: {
				'vue/no-unused-vars': 'error',
			},
		},
	],
}
