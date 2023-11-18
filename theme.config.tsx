import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <span>Spectrum Docs</span>,
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
