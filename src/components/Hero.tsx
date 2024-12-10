import Button from './Button'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={`${styles.heroContainer} flex justify-between`}>
      <div className='flex flex-col justify-between ms-3 sm:ms-5 md:ms-16 lg:ms-28 xl:ms-40 my-32 w-1/3'>
        <h1 className='text-darkBlue text-6xl leading-tight mb-10 font-light'>Next generation digital banking</h1>
        <p className='text-grayishBlue mb-10'>Take your financial life online. Your Easybank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.</p>
        <Button moreStyles={`lg:w-1/2 w-100`}/>
      </div>
      <div className={`${styles.illustration}`}></div>

    </section>
  )
}

export default Hero