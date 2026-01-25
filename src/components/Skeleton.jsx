import React from "react"
import "../style/css/skeleton.css"

const Skeleton = ({ width = "100%", height = "16px", radius = "6px" }) => {
  return (
    <div
      className="skeleton"
      style={{
        width,
        height,
        borderRadius: radius,
      }}
    />
  )
}

export default Skeleton
