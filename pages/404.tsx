import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'

const NotFoundPage: React.FC = () => (
  <Layout title="Página não encontrada">
    <h2>404: Página não encontrada.</h2>
    <Link href="/">
      <a>Volte para a Home</a>
    </Link>
  </Layout>
)

export default NotFoundPage
