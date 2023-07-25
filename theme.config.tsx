import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import type { DocsThemeConfig } from 'nextra-theme-docs';
import CurrentYear from './src/components/current-year';


const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center">
      <span className="font-bold text-xl ml-2 tracking-wide">XJTLU Wiki</span>
    </div>
  ),
  project: {
    link: 'https://github.com/renailu/wiki.xjtlu'
  },
  i18n: [],
  docsRepositoryBase: 'https://github.com/renailu/wiki.xjtlu',
  gitTimestamp() {
    return null;
  },
  footer: {
    text() {
      return (
        <>
          MIT License
          {' '}|{' '}
          Made with
          {' '}
          <span className="text-red-500 mx-1">♥</span>
          {' '}
          by
          {' '}
          <a href="https://sku.moe" className="mx-1 text-black dark:text-white underline underline-offset-2"
             target="_blank">仁爱路</a>
          {' '}|{' '}
          <span className="mx-1">&copy;</span>
          {' '}
          <CurrentYear defaultYear={2023}/>
        </>
      );
    }
  }
};

export default config;
