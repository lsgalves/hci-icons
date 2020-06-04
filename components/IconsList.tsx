import React from 'react'
import PresentableIcon from './PresentableIcon'

import { Icon } from '../interfaces'

type Props = {
  icons: Icon[]
}

const IconsList: React.FC<Props> = ({ icons }) => (
  <section className="icon-list">
    {icons.map(icon => (
      <PresentableIcon key={icon.slug} data={icon} />
    ))}
  </section>
)

export default IconsList
