import React from 'react'

export default ({ children, onClick }) => (
  <div
    className={'clickable'}
    onClick={onClick}
  >
    {children}
  </div>
)