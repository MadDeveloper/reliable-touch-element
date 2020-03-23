import PropTypes from "prop-types"
import React, { useState } from "react"

export function StableTouchElement({ onTouch, children, ...props }) {
  const [touchStartTriggered, setTouchStartTriggered] = useState(null)

  function handleTouchMove() {
    setTouchStartTriggered(null)
  }

  function handleTouchEnd(event) {
    if (touchStartTriggered) {
      setTouchStartTriggered(null)
      onTouch(event)
    }
  }

  return (
    <div
      onTouchStart={setTouchStartTriggered}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      {children}
    </div>
  )
}

StableTouchElement.propTypes = {
  onTouch: PropTypes.func.isRequired,
  children: PropTypes.any
}

export default StableTouchElement
