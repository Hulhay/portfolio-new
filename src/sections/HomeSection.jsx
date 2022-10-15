import hero from '../assets/hero.webp'

const HomeSection = () => {
    return (
        <header className='flex flex-col justify-center items-center bg-dark-charcoal h-screen lg:flex-row'>
            <div className='w-[35%] p-0 md:w-[25%] lg:w-[20%]'>
                <img src={hero} alt="hero" className='w-full' />
            </div>
            <div className='text-center'>
                <h1 className='text-2xl text-white md:text-4xl lg:text-7xl'>Syifa A Prasetyo</h1>
                <p className='text-base text-white pt-2 font-extralight md:text-lg lg:text-2xl'>Junior Engineer</p>
            </div>
        </header>
    )
}

export default HomeSection