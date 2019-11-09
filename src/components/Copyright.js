// Stateless component example

import React from 'react'

const Copyright = props => {

  const {text} = props

  return (
    <div className='copyright'>
      &copy;&nbsp;2019&nbsp;{text}
    </div>
  )
}

export default Copyright
