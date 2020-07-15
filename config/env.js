const path = require("path");
const root = path.resolve("./");
const { dependencies } = require(`${root}/package.json`);

const tsconfig = `${root}/tsconfig.json`;
const mainPath = `${root}/src/main.ts`;
const rendererPath = `${root}/src/app.ts`;
const target = `${root}/target`;
const template = `${root}/index.html`;
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  root,
  dependencies,
  tsconfig,
  mainPath,
  rendererPath,
  template,
  target,
  isDev,
};
