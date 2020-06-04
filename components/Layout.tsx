import React from 'react'
import Head from 'next/head'

import PaperPage from './PaperPage'
import Footer from './Footer'

type Props = {
  title?: string
}

const Layout: React.FC<Props> = ({ children, title = 'IHC Icons' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="layout-wrapper">
      <PaperPage>
        {children}
        <Footer />
      </PaperPage>
    </div>
  </div>
)

export default Layout
