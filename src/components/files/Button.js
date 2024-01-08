import React from 'react'

export const Button = ({setModal}) => {
  return (
    <button className='btn btn-primary btn-md'
        onClick={()=>setModal(true)}
        style={{background: "#ddd", padding: "10px"}}
    >
        View CV
    </button>
  )
}
