import React from 'react'

function LoadingBarSkeleton({className}:{className?:string}) {
  return (
    <div className={`loader ${className}`}></div>
  )
}

export default LoadingBarSkeleton