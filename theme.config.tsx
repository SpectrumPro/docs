import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <><img src="https://serv.hnz.li/spectrum/logo/default.png" width={30}></img><span  style={{marginLeft: ".4em"}}> Spectrum Docs</span></>,
  project: {
    link: 'https://github.com/spectrumPro/docs',
  },
  docsRepositoryBase: 'https://github.com/SpectrumPro/docs/tree/main/',
  footer: {
    text: 'Spectrum Docs',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Spectrum'
    }
  }
}

export default config
