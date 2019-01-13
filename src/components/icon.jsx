import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Component = ({ icon, type }) => {
  switch (type) {
    case 'brand':
      type = 'b'
      break
    case 'light':
      type = 'l'
      break
    default:
      type = 's'
  }

  const className = classNames([
    `fa${type}`, `fa-${icon}`
  ])

  return (
    <i className={className} />
  )
}

Component.propTypes = {
  icon: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default Component
