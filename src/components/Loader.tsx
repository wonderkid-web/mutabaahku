import React from 'react'

function Loader({className}:{className?:string}) {
  return (
    <div className={`loader ${className}`}></div>
  )
}

export default Loader