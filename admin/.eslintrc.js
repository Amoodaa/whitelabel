module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  root: true,
  // babel-eslint parser is used to support experimental features not supported in ESLint itself yet
  parser: 'babel-eslint',

  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    //  allow .js extensions for JSX.
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'linebreak-style': 0,
    // configure the prettier plugin
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
  plugins: ['react', 'prettier'],
};
