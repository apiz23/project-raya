import { Button } from "bootstrap";
import React from "react";
import "./Navbar.css";

export default function Navbar() {
	return (
		<>
			<nav class="navbar navbar-expand navbar-light navbar-dark shadow-5-strong">
				<div class="container-fluid d-flex">
					<ul class="navbar-nav mx-auto">
						<li class="nav-item">
							<a class="nav-link" href="/">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="">
								<button id="btnNav">&#128520;</button>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
