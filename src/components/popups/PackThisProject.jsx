import React from 'react'
import Card from "../main/Card"
import close from "../../assets/images/icon-close-modal.svg"

function PackThisProject() {

    const chooseCard = e => {
        let radioCard = document.querySelectorAll('.radio-card'),
        form = document.querySelectorAll('.border-top')
        
        radioCard.forEach(card => {
            card.style.border = ".5px solid lightgray"
        })
        e.currentTarget.parentNode.style.border = "2px solid hsl(176, 50%, 47%)"
        e.currentTarget.parentNode.style.borderRadius = "5px"
        if (e.currentTarget.parentNode === radioCard[1]) {
            form[0].classList.remove('d-none')
            form[1].classList.add('d-none')
        } else if (e.currentTarget.parentNode === radioCard[2]) {
            form[1].classList.remove('d-none')
            form[0].classList.add('d-none')
        }
    }

    const hidePopup = _ => {
        let overlay = document.querySelector('.overlay')
        overlay.classList.add('d-none')
    }

  return (
    <>
    <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-none d-flex justify-content-center" style={{backgroundColor: 'rgba(13, 14, 14, 0.555)'}}>

        <div className='' style={{marginTop: '15rem'}}>
        <Card
                content={<>
                    
                    <div className='position-relative'>
                        <img onClick={hidePopup} className='position-absolute end-0' style={{top: '-1.5rem', cursor: 'pointer'}} src={ close } alt="close" />
                    </div>

                    <h4 className='text-black fs-4 fw-bold mb-3'>
                        Pack this project
                    </h4>
                    <p className="lead text-black-50 fs-6 mb-3">
                        Want to support us in bringing Mastercraft Bamboo Mnitor Riser out in the world?
                    </p>

                    <form className='d-flex flex-column gap-4'>
                        
                        <div className='rounded radio-card'>
                            <div onClick={chooseCard} className="p-4">
                                <input className='me-3' type="radio" name="pack" id="no-reward" value={ "Pledge with no reward" } />
                                <label htmlFor="no-reward">Pledge with no reward</label>
                                <p className='mt-4 lead fs-6 text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sed eaque facere veritatis quis consequuntur temporibus ex, non rerum beatae odio soluta placeat sapiente quo, molestiae earum. Vitae, accusantium quae?</p>
                            </div>
                        </div>

                        <div className='rounded radio-card'>
                            <div onClick={chooseCard} className='d-flex flex-row justify-content-between align-items-center p-4 pb-0'>
                                <div>
                                    <input className='me-3' type="radio" name="pack" id="pledge" value={ "Bamboo Stand" } />
                                    <label htmlFor="pledge">
                                        Bamboo Stand
                                        <span className='d-inline-block ms-3 fw-bold text-success'>Pledge 25% or more</span>
                                    </label>
                                </div>
                                <div>
                                <span className='fw-bold fs-4'>101</span><span className='text-secondary'>left</span>
                                </div>
                            </div>
                            <p className='p-4 lead fs-6 text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure porro praesentium dolor obcaecati similique ducimus autem quos vitae. Earum quibusdam, modi quam consequuntur dolore ducimus sed ullam ab. Excepturi, quo.</p>
                            <div className='border-top p-4 d-flex d-none flex-column flex-md-row gap-md-2 justify-content-between align-items-center'>
                                <input className='border-0' placeholder='Enter Your Pledge' type="text" />
                                <div className=''>
                                    <button className='me-md-2 btn btn-outline-primary rounded-pill'>$25</button><button className='btn btn-outline-success rounded-pill'>Continue</button>
                                </div>
                            </div>
                        </div>

                        <div className='rounded radio-card'>
                            <div onClick={chooseCard} className='d-flex flex-row justify-content-between align-items-center p-4 pb-0'>
                                <div>
                                    <input className='me-3' type="radio" name="pack" id="black" value={ "Black Edition Stand" } />
                                    <label htmlFor="black">
                                        Black Edition Stand
                                        <span className='d-inline-block ms-3 fw-bold text-success'>Pledge 75% or more</span>
                                    </label>
                                </div>
                                <div>
                                <span className='fw-bold fs-4'>64</span><span className='text-secondary'>left</span>
                                </div>
                            </div>
                            <p className='p-4 lead fs-6 text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure porro praesentium dolor obcaecati similique ducimus autem quos vitae. Earum quibusdam, modi quam consequuntur dolore ducimus sed ullam ab. Excepturi, quo.</p>
                            <div className='border-top p-4 d-none d-flex flex-column flex-md-row gap-md-2 justify-content-between align-items-center'>
                                <input className='border-0' placeholder='Enter Your Pledge' type="text" />
                                <div className=''>
                                    <button className='me-md-2 btn btn-outline-primary rounded-pill'>$75</button><button className='btn btn-outline-success rounded-pill'>Continue</button>
                                </div>
                            </div>
                        </div>

                        <div className='border rounded opacity-25'>
                            <div className='d-flex flex-row justify-content-between align-items-center p-4 pb-0'>
                                <div>
                                    <input className='me-3' checked={false} type="radio" name="pack" id="mahogany" value={ "Mahogany Special Edition" } />
                                    <label htmlFor="mahogany">
                                        Mahogany Special Edition
                                        <span className='d-inline-block ms-3 fw-bold text-success'>Pledge 25% or more</span>
                                    </label>
                                </div>
                                <div>
                                    <span className='fw-bold fs-4'>0</span><span className='text-secondary'>left</span>
                                </div>
                            </div>
                            <p className='p-4 lead fs-6 text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure porro praesentium dolor obcaecati similique ducimus autem quos vitae. Earum quibusdam, modi quam consequuntur dolore ducimus sed ullam ab. Excepturi, quo.</p>
                        </div>
                        
                    </form>

                </>}
            />
        </div>

    </div>
    </>
  )
}

export default PackThisProject