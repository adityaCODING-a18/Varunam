import postcssNesting from 'postcss-nesting';

const config = {
  plugins: {
    'postcss-nesting': postcssNesting(),
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
