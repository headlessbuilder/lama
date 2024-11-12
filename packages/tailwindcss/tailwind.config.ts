import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Omit<Config, 'content'> = {
	theme: {},
	plugins: [forms, typography],
};

export default config;
