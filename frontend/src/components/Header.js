import { Link } from "react-router-dom"
function Header() {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    className<span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/allconatcts">ContactsApp</Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/allcontacts">AllContacts </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addcontact">Add Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/counter">Counter example</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Header