import Layout from '../components/Layout'
import IconsList from '../components/IconsList'
import { SvgPainting } from '../components/svgs'

import icons from '../utils/icons'

const IndexPage = () => (
  <Layout title="IHC Ícones">
    <main>
      <div className="topo">
        <h1 className="title">Ícones feitos para a aula de IHC da Unifadra</h1>
        <h2 className="subtitle">
          Os ícones criados estão listados abaixo, clique neles para ter mais
          informações.
        </h2>
      </div>
      <IconsList icons={icons} />
    </main>
    <SvgPainting />
  </Layout>
)

export default IndexPage
