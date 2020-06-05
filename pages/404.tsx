import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

const NotFoundPage: React.FC = () => (
  <Layout title="Página não encontrada">
    <div className="error-wrapper">
      <p className="error-message">404: Página não encontrada.</p>
      <Link href="/">
        <a>Volte para a Home</a>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
