import React from 'react'

const Footer = () => {
  const date = new Date()
  const current = `${date.getDate()}/${date.getMonth()}`
  return (
    <footer>
      <h2>&copy;copyright 2022 {current}</h2>
    </footer>
  )
}

export default Footer
