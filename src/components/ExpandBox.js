// Statefull functional component example

import React, { useState } from 'react'

export default function ExpandBox ({title, text, onExpanded}) {

  let [isExpanded, toggle] = useState(0)

  return (
    <div>
      <button
        onClick={() => {
          toggle(
            isExpanded = !isExpanded,
            onExpanded ? onExpanded(`${title} was ${isExpanded ? 'expanded' : 'collapsed'}`) : null
            )
        }}
        style={{color: isExpanded ? 'red' : 'black'}}>
        {isExpanded ? '-' : '+'}
      </button>
      &nbsp;
      <span>{title}</span>
      <div
        className={isExpanded ? 'is-expanded' : 'is-collapsed'}
        style={{display: isExpanded ? 'block' : 'none'}}>
        {text}
      </div>
    </div>
  )
}
