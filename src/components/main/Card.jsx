import React from 'react'

function Card({ addClass, content }) {

  return (
    <>
    <div className="">
        <div className={`bg-white my-card border rounded px-4 py-5 mx-md-auto ${ addClass }`}>
            { content }
        </div>
    </div>
    </>
  )
}

export default Card