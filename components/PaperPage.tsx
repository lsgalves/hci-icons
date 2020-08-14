import React, { useState } from 'react'
import Link from 'next/link'

type Props = {
  withBack?: boolean
}

const PaperPage: React.FC<Props> = ({ children, withBack }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className={`page
      ${withBack ? 'with-back' : ''}
      ${isHovered ? 'go-back' : ''}`}
    >
      {withBack && (
        <Link href="/">
          <a>
            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="corner"
            ></span>
          </a>
        </Link>
      )}
      {children}
    </div>
  )
}

export default PaperPage
