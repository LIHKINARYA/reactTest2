import React from 'react';
import '../components/component.css';

const Navbar = () => {

    function refreshPage() {
        window.location.href = "/";
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Pharmacy</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <a className="nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/manageTeam">Manage Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/manageMeds">Manage Medicine</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/manageorders">Manage Orders</a>
                        </li>
                    </ul>
                </div>
                <a className="user">Admin</a>
                <button onClick={refreshPage}>Signout</button>
            </nav>
        </div>
    );
}

export default Navbar;