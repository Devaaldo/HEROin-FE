import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<span className="fw-bold">HERO</span>in
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/user-info">
								Identitas
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/hypothesis">
								Hipotesis
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/questionnaire">
								Kuesioner
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/dashboard">
								Dashboard
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
