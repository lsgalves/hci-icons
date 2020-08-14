import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '../../components/Layout'
import { Icon } from '../../interfaces'
import icons from '../../utils/icons'

type Props = {
  item?: Icon
}

const StaticPropsDetail = ({ item }: Props) => (
  <Layout title={`Ícone ${item?.name}`} withBack={true}>
    <div className="icon-wrapper">
      <h2 className="icon-name">{item?.name}</h2>
      <div className="icon-image-wrapper">
        <img
          className="icon-image"
          src={`/icons/${item?.image}`}
          alt={item?.name}
        />
      </div>
      <p className="icon-description">{item?.description}</p>
    </div>
  </Layout>
)

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = icons.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug
  const item = icons.find(icon => icon.slug === slug)
  return { props: { item } }
}
