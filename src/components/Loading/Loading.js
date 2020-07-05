import React, { memo } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const Loading = memo(({ size = '5x' }) => {
  return <FontAwesomeIcon icon={faSpinner} spin size={size} />
})
