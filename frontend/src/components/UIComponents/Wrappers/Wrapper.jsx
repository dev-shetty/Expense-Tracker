import React from "react"

function Wrapper({ setModal, children }) {
  const newChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { setModal })
  )
  return <>{newChildren}</>
}

export default Wrapper
