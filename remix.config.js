// remix.config.js
/** @type {import('@remix-run/dev').AppConfig} */
const config = {
  future: {
    v2_meta: true,
    unstable_cssSideEffectImports: true,
  },
  ignoredRouteFiles: ["**/.*"],
};

export default config;
