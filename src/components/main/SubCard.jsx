import React from 'react'

function SubCard({ title, pledge, desc, left, cursor }) {
  return (
    <>
    <div className='border rounded p-4'>

        {/* CARD HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className='text-black fs-4'>
                { title }
            </h3>
            <p className='fw-bold' style={{color: 'hsl(176, 50%, 47%)'}}>
                {`Pledge $${ pledge } or more`}
            </p>
        </div>

        {/* CARD TEXT */}
        <div className='mb-4'>
            <p className='text-black-50 lead'>
                { desc }
            </p>
        </div>

        {/* CARD FOOTER */}
        <div className='mb-4 d-flex justify-content-between align-items-center'>

            <div className="d-flex align-items-center gap-1">
                <h5 className='text-black fs-3'>{ left }</h5>
                <p className='text-black-50'>left</p>
            </div>

            <div>
                <button className={`select-reward btn btn-lg text-white rounded-pill ${ cursor } cyan-btn` } style={{backgroundColor: 'hsl(176, 50%, 47%)'}}>
                    Select Reward
                </button>
            </div>

        </div>

    </div>
    </>
  )
}

export default SubCard