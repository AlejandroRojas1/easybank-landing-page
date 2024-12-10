
type MoreStyles = {
    moreStyles: string
}

const Button: React.FC<MoreStyles> = ({moreStyles}) => {
    return (
        <button
            className={`my-5 text-white font-medium rounded-full p-3 md:px-2 lg:px-6 bg-gradient-to-r from-limeGreen to-brightCyan hover:opacity-65 ${moreStyles}`}
        >Request Invite</button>
    )
}

export default Button