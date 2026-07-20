import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx}'], theme: { extend: { colors: { ink: '#17202a', accent: '#d97757', mist: '#f5f7f8' }, boxShadow: { card: '0 12px 35px rgba(15, 23, 42, .06)' } } }, plugins: [] };
export default config;
