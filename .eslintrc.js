module.exports = {
  extends: 'airbnb',
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  globals: {
    renderMathInElement: false,
    KRAMSTER_TRACKING_ID: false,
  },
  rules: {
    'brace-style': ['warn', 'stroustrup'],
    'jsx-a11y/no-static-element-interactions': 'off',
    'max-len': ['warn', 120],
    'no-param-reassign': 'off',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-underscore-dangle': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'semi': ['error', 'never'],
  }
};
