import React from 'react'
import Link from 'next/link'

import { Icon } from '../interfaces'

type Props = {
  data: Icon
}

const PresentableIcon: React.FC<Props> = ({ data }) => (
  <Link href="/icons/[slug]" as={`/icons/${data.slug}`}>
    <a>
      <div className="icon-container">
        <div className="icon-wrapper">
          <img className="icon" src={`/icons/${data.image}`} alt={data.name} />
        </div>
        <span className="icon-name">{data.name}</span>
      </div>
    </a>
  </Link>
)

export default PresentableIcon
