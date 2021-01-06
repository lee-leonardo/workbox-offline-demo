import * as packageJson from "./package.json";
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
      dir: "docs",
      format: "es",
    },
    plugins: [
      resolve(),
      html({
        transform: (html) => {
          const path = `${packageJson.name}/`;
          const strings = [
            ["docs/", path],
            ["build/src/pages/", path],
            ["./", path],
            ['swpath="docs', `swpath="workbox-offline-demo`],
            ['href="manifest.json', `href="workbox-offline-demo/manifest.json`],
          ];

          for (let i = 0; i < strings.length; i++) {
            const [key, to] = strings[i];
            while (html.indexOf(key) !== -1) {
              html = html.replace(key, to);
            }
          }

          return html;
        },
      }),
      terser(),
      // strip({
      //   functions: ['console.log']
      // }),
      copy({
        targets: [
          { src: "assets/**/*", dest: "docs/assets/" },
          { src: "styles/global.css", dest: "docs/styles/" },
          { src: "manifest.json", dest: "docs/" },
        ],
      }),
      // Let Workbox do the heavy lifting.
      generateSW({
        swDest: "docs/pwabuilder-sw-generated.js",
        globDirectory: "docs/",
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
  {
    input: "advanced.html",
    output: {
      dir: "docs",
      format: "es",
    },
    plugins: [
      resolve(),
      html({
        transform: (html) => {
          const path = `${packageJson.name}/`;
          const strings = [
            ["docs/", path],
            ["build/src/pages", path],
            ["./", path],
            ['swpath="pwabuilder', `swpath="workbox-offline-demo/pwabuilder`],
            ['href="manifest.json', `href="workbox-offline-demo/manifest.json`],
          ];

          for (let i = 0; i < strings.length; i++) {
            const [key, to] = strings[i];
            while (html.indexOf(key) !== -1) {
              html = html.replace(key, to);
            }
          }

          return html;
        },
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
      dir: "docs",
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
        outDir: "docs",
      }),
      OMT(),
      workboxInjectManifest({
        // injectionPoint: "", // if you need to customize precache string which default is: self.__WB_MANIFEST
        // use the getManifest api not the inject manifest one https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.getManifest
        globDirectory: "docs/",
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
