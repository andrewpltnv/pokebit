// prettier.config.js
export default {
	$schema: "http://json.schemastore.org/prettierrc",
	singleQuote: true,
	semi: false,
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindConfig: "./tailwind.config.js",
};
