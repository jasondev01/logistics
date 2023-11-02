import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// page
import Home from './pages/Home'

// layout
import MainLayout from './layouts/MainLayout'

const App = () => {

    return (
        <Router basename='/logistics'>
            <Routes>
                <Route element={<MainLayout />} >
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
