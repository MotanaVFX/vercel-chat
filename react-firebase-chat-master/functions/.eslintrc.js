module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
   "eslint:recommended",,
    "google",
  ],
  rules: {
    quotes: ["recommended", "double"],
  },
Plugin: {
  Plugin: ["only-warn"],
},
};
