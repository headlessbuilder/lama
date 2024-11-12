import nextra from 'nextra';

const withNextra = nextra({
	theme: 'nextra-theme-docs',
	themeConfig: 'src/theme.config.tsx',
});

/** @type {import("next").NextConfig} */
const config = {
	output: 'standalone',
};

export default withNextra(config);
