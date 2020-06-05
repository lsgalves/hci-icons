import React from 'react'
import Link from 'next/link'

import { Icon } from '../interfaces'

type Props = {
  data: Icon
}

const PresentableIcon: React.FC<Props> = ({ data }) => (
  <Link href="/icons/[slug]" as={`/icons/${data.slug}`}>
    <a>
      <div className="display-icon-container">
        <div className="display-icon-wrapper">
          <img
            className="display-icon"
            src={`/icons/${data.image}`}
            alt={data.name}
          />
        </div>
        <span className="display-icon-name">{data.name}</span>
      </div>
    </a>
  </Link>
)

export default PresentableIcon
