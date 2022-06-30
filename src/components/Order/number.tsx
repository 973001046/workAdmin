import React from 'react'

const Number: React.FC<{number: number}> = (props) => {
  return <div>{props.number}</div>
}

export default Number