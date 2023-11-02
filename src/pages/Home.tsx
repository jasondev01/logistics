import Logistics from '../components/logistics/Logistics'
import Services from '../components/services/Services'
import Certified from '../components/certified/Certified'
import Blogs from '../components/blogs/Blogs'
import Reviews from '../components/reviews/Reviews'
import Banner from '../components/banner/Banner'
import About from '../components/about/About'

// styles
import '../styles/services.css'
import '../styles/about.css'
import '../styles/banner.css'
import '../styles/blogs.css'
import '../styles/certified.css'
import '../styles/reviews.css'
import '../styles/logistics.css'

const Home = () => {
    return (
        <>
            <Banner />
            <Logistics />
            <About />
            <Services />
            <Certified />
            <Blogs />
            <Reviews />
        </>
    )
}

export default Home
