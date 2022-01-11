import heroStyles from '../styles/Hero.module.css'

const Hero = () => {
    return (
        <div className={heroStyles.hero}>
            <img className={heroStyles.hero} src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2018%2F01%2Fsustainable-sushi-bamboo-interior-FT-BLOG0118.jpg" />
            <div className={heroStyles['hero-overlay']}>
                <h2 className={heroStyles['hero-overlay-title']}>An Authentic Japanese Experience</h2>
                <p className={heroStyles['hero-overlay-content']}>Banzai Sushi strives to source local, sustainable and organic when possible. We work hard to source premium ingredients and we cook everything from scratch with love. We also do our best to pay our employees living wages (tips are shared with all employees, including kitchen staff) and to reduce our environmental footprint wherever we can. Overall, these factors translate to higher menu prices, but we hope that you find value and feel a sense of comfort in knowing that we aim to get better everyday at doing what is important to us.</p>
            </div>
        </div>
    )
}

export default Hero
