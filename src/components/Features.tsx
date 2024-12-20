
type FeaturesTypes = {
    img: string,
    title: string,
    description: string,
    key: number
}

const featuresDates: FeaturesTypes[] = [
    {
        img: '/assets/icon-online.svg',
        title: 'Online Banking',
        description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
        key: 1
    },
    {
        img: '/assets/icon-budgeting.svg',
        title: 'Simple Budgeting',
        description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
        key: 2
    },
    {
        img: '/assets/icon-onboarding.svg',
        title: 'Fast Onboarding',
        description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
        key: 3
    },
    {
        img: '/assets/icon-api.svg',
        title: 'Open API',
        description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
        key: 4
    },
]

const Features = () => {
  return (
    <section className="bg-lightGrayishBlue py-20 px-3 sm:px5 md:px-16 lg:px-28 xl:px-40 relative z-0">
        <h2 className="text-center md:text-center lg:text-start text-4xl text-darkBlue mb-8">Why choose Easybank?</h2>
        <p className="text-center md:text-center lg:text-start md:w-100 text-grayishBlue lg:w-2/3 mb-11">We leverage Open Banking to turn your bank account into your financial hub. Control 
        your finances like never before.</p>
        <div className="md:grid md:grid-rows-2 md:grid-cols-2 lg:flex lg:justify-between gap-5">
            {featuresDates.map(feature =>(
                <div key={feature.key} className="flex flex-col mx-auto items-center md:mx-auto md:items-center md:w-1/2 lg:items-start lg:w-1/4">
                    <img src={feature.img} alt={feature.title} className="mb-10"/>
                    <h3 className="mb-5 text-center md:text-xl lg:text-2xl ">{feature.title}</h3>
                    <p className="text-grayishBlue text-center mx-auto md:text-center lg:text-start">{feature.description}</p>
                </div>
            ))}
        </div>
        
    </section>
  )
}

export default Features