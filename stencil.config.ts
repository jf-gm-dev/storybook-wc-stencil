import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'storybook-wc-stencil',
  globalStyle: 'src/styles/globals.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
