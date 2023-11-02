import { Outlet } from "react-router-dom"

// components
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

// styles
import '../styles/header.css'
import '../styles/footer.css'


const MainLayout = () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout