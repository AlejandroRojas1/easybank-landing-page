import Button from './Button'
import styles from '../styles/header.module.css'

const Header = () => {
    return (
        <>
            <nav className="w-full bg-white">
                <div className="mx-40 flex flex-row justify-between">
                    <img className="object-contain py-5" src="/assets/logo.svg" alt="logo" />
                    <ul className={`${styles.navContainer} min-w-2/6 flex justify-evenly items-center text-grayishBlue`}>
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
                    <Button />
                </div>
            </nav>
        </>
    )
}

export default Header