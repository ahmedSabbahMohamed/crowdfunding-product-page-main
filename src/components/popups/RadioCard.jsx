import React from 'react'

function RadioCard({ connect, label, desc, addFooter }) {

  // const handleClick = e => {
  //   let allCards = document.querySelectorAll('.radio-card'),
  //   allRadio = document.querySelectorAll('.radio')
  //   allCards.forEach(card => {
  //     card.style.border = "1px solid ligthgray"
  //   })
  //   allRadio.forEach(radio => {
  //     radio.setAttribute = ('checked', false)
  //   })
  //   e.currentTarget.parentNode.style.border = "1px solid hsl(176, 50%, 47%)"
  //   e.currentTarget.children[0].setAttribute = ('checked', true)
  // }

  return (
    <>
    {/* <div className='rounded test'>

        <div onClick={handleClick} className='d-flex align-items-center gap-4 p-4 radio-card'>
              <input className='radio' id={connect} name={connect} type="radio" />
              <label className='fw-bold text-black' htmlFor={connect}>{ label }</label>
          </div>

          <p className="text-black-50 lead px-4 fs-6">
            { desc }
          </p>

          <div className='py-4 border-top d-none'>
              { addFooter }
          </div>


    </div> */}
    </>
  )
}

export default RadioCard