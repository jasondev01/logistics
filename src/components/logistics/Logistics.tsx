import { FaListUl, FaCalculator, FaSearch, FaRegHandshake } from 'react-icons/fa'

const Logistics = () => {
    return (
        <section id='logistics'>
            <div className="container logistics__container">
                <ul className='logistics__items'>
                    <li className="logistics__item">
                        <a href="#">
                            <span> <FaListUl className='logistics__item-icon'/> </span>
                            <p> Book Services </p>
                        </a>
                    </li>
                    <li className="logistics__item">
                        <a href="#">
                            <span> <FaCalculator className='logistics__item-icon'/> </span>
                            <p> Rate Calculator </p>
                        </a>
                    </li>
                    <li className="logistics__item">
                        <a href="#">
                            <span> <FaSearch className='logistics__item-icon'/> </span>
                            <p> Cargo Tracking </p>
                        </a>
                    </li>
                    <li className="logistics__item">
                        <a href="#">
                            <span> <FaRegHandshake className='logistics__item-icon'/> </span>
                            <p> Be Our Partners </p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Logistics
