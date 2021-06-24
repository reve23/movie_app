import {Link} from 'react-router-dom'
import Search from './Search';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Movies</a>
                <ul>
                    <Link to="/">
                        <li className="justify-content-center align-content-center text-decoration-none list-unstyled text-light"><a >HOME</a></li>
                    </Link>
                </ul>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <Search/>
            </div>
        </nav>
    )
}

export default Header;