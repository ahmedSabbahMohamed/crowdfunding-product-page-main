import React from 'react'
import Card from './Card'
import bookmark from "../../assets/images/icon-bookmark.svg"
import logoMaster from "../../assets/images/logo-mastercraft.svg"
import SubCard from './SubCard'
import PackThisProject from '../popups/PackThisProject'

function Main() {

    const bookmarkBtn = _ => {
        let bookmarked = document.querySelector('.bookmarked'),
        bookmark = document.querySelector('.bookmark')
        bookmarked.classList.remove('d-none')
        bookmark.classList.add('d-none')
    }

    const bookmarkedBtn = _ => {
        let bookmarked = document.querySelector('.bookmarked'),
        bookmark = document.querySelector('.bookmark')
        bookmarked.classList.add('d-none')
        bookmark.classList.remove('d-none')
    }

    const packThisProject = _ => {
        let overlay = document.querySelector('.overlay')
        overlay.classList.remove('d-none')
    }

  return (
    <>
    <main className=''>

        <div className='bg-light py-5'>
            <div className='d-flex flex-column gap-4 position-relative minus-top'>

                {/* START FIRST CARD */}

                <div className='first-card-container position-relative'>

                    <div className='first-card'>

                        <img className='logo-master position-absolute start-50 translate-middle-x' src={ logoMaster } alt="logo-mastercraft" style={{top: '-2rem'}} />

                        <Card
                            content={<>

                                <div className="text-center">
                                    <h1 className='text-black fw-bold fs-3'>
                                        Mastercraft Bamboo Monitor Riser
                                    </h1>
                                    <p className="text-black-50 lead">
                                        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                                    </p>
                                </div>

                                <div className="btns d-flex flex-column gap-4 flex-md-row justify-content-between align-items-center">
                                    <button onClick={packThisProject} className="btn back-this-project btn-lg rounded-pill text-white fs-5 cyan-btn" style={{backgroundColor: 'hsl(176, 50%, 47%)'}}>Pack this project</button>
                                    <div className="">
                                        <button onClick={bookmarkBtn} className="btn bookmark btn-light btn-lg rounded-pill text-white fs-5 text-black-50 ps-5 pe-5 pe-md-3 position-relative">
                                            <img className='position-absolute' src={ bookmark } alt="bookmark" />
                                            Bookmark
                                        </button>
                                        <button onClick={bookmarkedBtn} className="btn bookmarked btn-lg d-none rounded-pill fs-5 ps-5 position-relative" style={{color: 'hsl(176, 50%, 47%)', backgroundColor: 'hsl(163, 28%, 95%)'}}>
                                            <img className='position-absolute' src={ bookmark } alt="bookmark" />
                                            Bookmarked
                                        </button>
                                    </div>
                                </div>
                            </>}
                            addClass={""}
                        />

                    </div>

                </div>

                {/* END FIRST CARD */}
                {/* =============================================================== */}
                {/* START CARD 2 */}

                <div>
                    <Card
                        content={<>

                            <div className="d-flex flex-column flex-md-row mb-4">

                                <div className='col text-center text-md-start ps-md-5 border-right'>
                                    <h2 className='text-black fw-bold'>$89,914</h2>
                                    <p className="text-black-50 fs-6">
                                        of $100,000 backed
                                    </p>
                                </div>

                                <div className='col text-center text-md-start ps-md-5 border-right'>
                                    <h2 className='text-black fw-bold'>5,007</h2>
                                    <p className="text-black-50">
                                        total backers
                                    </p>
                                </div>

                                <div className='col text-center text-md-start ps-md-5'>
                                    <h2 className='text-black fw-bold'>56</h2>
                                    <p className="text-black-50">
                                        days left
                                    </p>
                                </div>
                                
                            </div>

                            <div className="position-relative py-1 rounded-pill bg-light">
                                <div className="position-absolute py-1 rounded-pill top-0 start-0 w-75" style={{backgroundColor: 'hsl(176, 50%, 47%)'}}>

                                </div>
                            </div>

                        </>}
                    />
                </div>

                {/* END CARD 2 */}
                {/* =============================================================== */}
                {/* START CARD 3 */}

                <div>
                    <Card
                        content={<>

                            <h2 className='text-black fs-4 fw-bold mb-4'>
                                About this project
                            </h2>
                            <p className="text-black-50 lead">
                                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                                <br /><br />
                                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand. 
                            </p>

                            <div className="d-flex flex-column gap-4">

                                <div>
                                    <SubCard
                                        title={ "Bamboo Stand" }
                                        pledge={ 25 }
                                        desc={ "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list." }
                                        left={ 101 }
                                    />
                                </div>

                                <div>
                                    <SubCard
                                        title={ "Black Edition Stand" }
                                        pledge={ 275 }
                                        desc={ "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included." }
                                        left={ 64 }
                                    />
                                </div>

                                <div className='opacity-25'>
                                    <SubCard
                                        title={ "Mahogany Special Edition" }
                                        pledge={ 200 }
                                        desc={ "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included." }
                                        left={ 0 }
                                        cursor={ "not-allowed" }
                                    />
                                </div>

                            </div>

                        </>}
                    />
                </div>

                {/* END CARD 3 */}

            </div>
        </div>

    </main>
    </>
  )
}

export default Main