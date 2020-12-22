import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import { generateSW, injectManifest } from 'rollup-plugin-workbox';
import html from '@open-wc/rollup-plugin-html';
import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';

export default [{
  input: 'index.html',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    resolve(),
    html(),
    terser(),
    strip({
      functions: ['console.log']
    }),
    copy({
      targets: [
        { src: 'assets/**/*', dest: 'dist/assets/' },
        { src: 'styles/global.css', dest: 'dist/styles/'},
        { src: 'manifest.json', dest: 'dist/'}
      ]
    }),
    // Let Workbox do the heavy lifting.
    generateSW({
      swDest: 'dist/pwabuilder-sw-generated.js',
      globDirectory: 'dist/',
      globPatterns: [
        'styles/*.css',
        '**/*/*.svg',
        '*.js',
        '*.html',
        'assets/**',
        '*.json'
      ]
    })
  ]
}, {
  input: 'pwabuilder-sw.js',
  output: {
    file: 'dist/pwabuilder-sw-upgraded.js',
    format: 'iife',
  },
  plugins: [
    resolve(),
    terser(),
    strip({
      functions: ['console.log']
    }),
    // Incorporate Workbox into your service worker
    injectManifest({
      swSrc: "pwabuilder-sw.js",
      swDest: 'dist/pwabuilder-sw-upgraded.js',
      // injectionPoint: "",
      globDirectory: 'dist/',
      globPatterns: [
        'styles/*.css',
        '**/*/*.svg',
        '*.js',
        '*.html',
        'assets/**',
        '*.json'
      ]
    })
  ]
}];