
type ArticlesTypes = {
    img: string,
    author: string,
    title: string,
    description: string,
    key: number
}

const articlesData: ArticlesTypes[] = [
    {
        img: '/assets/image-currency.jpg',
        author: 'By Claire Robinson',
        title: 'Receive money in any currency with no fees',
        description: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
        key: 1
    },
    {
        img: '/assets/image-restaurant.jpg',
        author: 'By Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
        key: 2
    },
    {
        img: '/assets/image-plane.jpg',
        author: 'By Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
        key: 3
    },
    {
        img: '/assets/image-confetti.jpg',
        author: 'By Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
        key: 4
    }
]

const Articles = () => {
    return (
        <section className="mx-40 mb-20 bg-veryLightGray">
            <h2 className="mt-24 mb-14 text-4xl">Latest Articles</h2>
            <div className="flex justify-between">
                {articlesData.map(article => (
                    <article key={article.key} className="w-1/4 h-40 bg-white ">
                        <img src={article.img} alt="money" className="w-full h-50%"/>
                        <p className="text-grayishBlue text-sm">{article.author}</p>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </article>
                ))}
            </div>

        </section>
    )
}

export default Articles