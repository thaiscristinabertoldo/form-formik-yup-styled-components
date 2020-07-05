import React, { memo, useState, useEffect, useCallback } from 'react'

import StyledModal from './Modal.css'

export const Modal = memo(({ onClose, id = 'modal', isOpen = false, modalSize = 'md', children }) => {
  const [fadeType, setFadeType] = useState()

  const background = React.createRef()

  const onEscKeyDown = useCallback((e) => {
    console.log('aaaa')
    if (e.key !== 'Escape') {
      return
    }
    return setFadeType('out')
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', onEscKeyDown, false)
    return () => {
      window.removeEventListener('keydown', onEscKeyDown, false)
    }
  })

  useEffect(() => {
    if (!isOpen) {
      setFadeType('out')
    } else {
      setFadeType('in')
    }
  }, [isOpen])

  const transitionEnd = useCallback(
    (e) => {
      if (e.propertyName !== 'opacity' || fadeType === 'in') return

      if (fadeType === 'out') {
        onClose()
      }
    },
    [fadeType, onClose]
  )

  const handleClick = useCallback((e) => {
    e.preventDefault()
    setFadeType('out')
  }, [])

  return (
    <StyledModal
      id={id}
      className={`wrapper ${'size-' + modalSize} fade-${fadeType}`}
      role="dialog"
      modalSize={modalSize}
      onTransitionEnd={transitionEnd}
    >
      <div className="box-dialog">
        <div className="box-header">
          <label onClick={handleClick} className="close">
            ×
          </label>
        </div>
        <div className="box-content">{children}</div>
      </div>
      <div className={`background`} onMouseDown={handleClick} ref={background} />
    </StyledModal>
  )
})
