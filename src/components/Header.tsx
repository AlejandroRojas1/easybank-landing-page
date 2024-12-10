import Button from './Button'
import styles from '../styles/header.module.css'
import { useState, useEffect, useRef } from 'react'

const Header = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
    const [displayedMenu, setDisplayedMenu] = useState<boolean>()
    const navRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleDisplayedMenu = () => {
        if (navRef.current && windowWidth <= 880) {
            !displayedMenu
                ? (navRef.current.style.display = "flex")
                : (navRef.current.style.display = "none")
        }
        setDisplayedMenu(!displayedMenu)
    }

    return (
        <>
            {

                (displayedMenu && windowWidth <= 875)
                && <div className='fixed top-0 left-0 w-full h-full bg-gradient-to-t from-black z-40'></div>

            }

            <nav className="flex justify-between w-full bg-white relative z-50">
                <div className="mx-3 sm:mx-5 md:mx-16 lg:mx-28 xl:mx-40 flex justify-between">
                    <img className="my-auto w-28 h-16 py-5" src="/assets/logo.svg" alt="logo" />

                    <ul ref={navRef} className={`${styles.navContainer} min-w-1/2 text-grayishBlue`}>
                        <li className=" h-full hover:cursor-pointer hover:text-darkBlue">
                            <a className="px-5 h-full flex items-center" href="#"><span>Home</span></a>
                        </li>
                        <li className="flex h-full hover:cursor-pointer hover:text-darkBlue">
                            <a className="h-full flex px-5 items-center" href="#"><span>About</span></a>
                        </li>
                        <li className="flex h-full hover:cursor-pointer hover:text-darkBlue">
                            <a className="h-full flex px-5 items-center" href="#"><span>Contact</span></a>
                        </li>
                        <li className="flex h-full hover:cursor-pointer hover:text-darkBlue">
                            <a className="h-full flex px-5 items-center" href="#"><span>Blog</span></a>
                        </li>
                        <li className="flex h-full hover:cursor-pointer hover:text-darkBlue">
                            <a className="h-full flex px-5 items-center" href="#"><span>Careers</span></a>
                        </li>
                    </ul>

                    {
                        windowWidth <= 880 &&
                        <div className='absolute top-0 right-5'>
                            <button onClick={handleDisplayedMenu}>
                                {
                                    displayedMenu
                                        ? <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#1A2633" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" /></svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#1A2633" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" /></svg>
                                }
                            </button>
                        </div>
                    }

                </div>
                {
                    windowWidth > 880
                    && < Button moreStyles='' />
                }
            </nav>
        </>
    )
}


export default Header