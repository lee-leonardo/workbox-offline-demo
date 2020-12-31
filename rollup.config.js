import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import { generateSW } from "rollup-plugin-workbox";
import html from "@open-wc/rollup-plugin-html";
// import strip from '@rollup/plugin-strip';
import copy from "rollup-plugin-copy";
import OMT from "@surma/rollup-plugin-off-main-thread";
import typescript from "@rollup/plugin-typescript";
import workboxInjectManifest from "rollup-plugin-workbox-inject";

export default [
  {
    input: "index.html",
    output: {
      dir: "dist",
      format: "es",
    },
    plugins: [
      resolve(),
      html(),
      terser(),
      // strip({
      //   functions: ['console.log']
      // }),
      copy({
        targets: [
          { src: "assets/**/*", dest: "dist/assets/" },
          { src: "styles/global.css", dest: "dist/styles/" },
          { src: "manifest.json", dest: "dist/" },
        ],
      }),
      // Let Workbox do the heavy lifting.
      generateSW({
        swDest: "dist/pwabuilder-sw-generated.js",
        globDirectory: "dist/",
        globPatterns: [
          "styles/*.css",
          "**/*/*.svg",
          "*.js",
          "*.html",
          "assets/**",
          "*.json",
        ],
      }),
    ],
  },
  // TODO replace with a better sw system builds before attempting to inject the manifest?
  // examples here:
  // https://github.com/jeffposnick/jeffposnick.github.io/blob/active/rollup.config.js
  // https://github.com/GoogleChromeLabs/so-pwa/blob/master/rollup.config.js
  {
    input: "pwabuilder-sw.ts",
    output: {
      dir: "dist",
      format: "amd",
    },
    manualChunks: (id) => {
      if (!id.includes("/node_modules/")) {
        return undefined;
      }

      // files to manually chunk in.
      const chunkNames = ["workbox", "lit-html", "html-escaper", "regexparam"];
      return chunkNames.find((chunkName) => id.includes(chunkName) || "misc");
    },
    plugins: [
      resolve({ browser: true }),
      // strip({
      //   functions: ['console.log']
      // }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(
          process.env.NODE_ENV || "development"
        ),
      }),
      typescript({
        outDir: "dist",
      }),
      OMT(),
      workboxInjectManifest({
        // injectionPoint: "", // if you need to customize precache string which default is: self.__WB_MANIFEST
        // use the getManifest api not the inject manifest one https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.getManifest
        globDirectory: "dist/",
        globPatterns: [
          "styles/*.css",
          "**/*/*.svg",
          "*.js",
          "*.html",
          "assets/**",
          "*.json",
        ],
      }),
      // compiler(), // @ampproject/rollup-plugin-closure-compiler has superior minification ability to terser, but that's another import
      terser(),
    ],
  },
];
