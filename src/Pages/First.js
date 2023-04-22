import React from "react";
import Navbar from "../Components/Navbar";
import "./First.css";
import Qr1 from "./1.jpg";
import Qr2 from "./2.jpg";

export default function First() {
	return (
		<>
			<Navbar />
			<div className="container-fluid mx-auto">
				<h1>Selamat Hari Raya</h1>
				<div className="row d-flex justify-content-center">
					<div className="col col-lg-12 m-5">
						<div class="card">
							<h2 class="card-header">
								<i>Ucapan Khas</i>
							</h2>
							<div class="card-body">
								<h5 class="card-title"></h5>
								<p class="card-text">
									Cahaya Ramadan berlalu pergi,
									<br />
									Menyambut tibanya Aidilfitri, <br />
									Ampun maaf segala peri,
									<br />
									Semoga ikatan kekal dihati, <br />
									Selama Hari Raya Maaf Zahir Batin
								</p>
								<div className="accordion" id="accordion">
									<div className="accordion-item">
										<h2 className="accordion-header">
											<button
												className="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												Click Here !
											</button>
										</h2>
										<div
											id="collapseOne"
											className="accordion-collapse collapse show"
											data-bs-parent="#accordionExample"
										>
											<div className="accordion-body">
												<p>
													Nama diberi<br></br>
													<strong>Muhammad Hafizuddin </strong>
													mewakili dari keluarga saya mengambil kesempatan ingin
													mengucapkan Selamat Hari Raya Aidilfitri kepada
													sesiapa sahaja yang membaca ini dan semoga perayaan
													kali ini membawa kegembiraan, ketenangan, dan
													kebahagiaan di dalam keluarga.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button
					type="button"
					className="btn"
					id="btnOpen"
					data-bs-toggle="modal"
					data-bs-target="#staticBackdrop"
				>
					Plz Click Me &#128536;
				</button>
				<div
					className="modal fade"
					id="staticBackdrop"
					data-bs-backdrop="static"
					data-bs-keyboard="false"
					tabindex="-1"
					aria-labelledby="staticBackdropLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h2 className="modal-title fs-5" id="staticBackdropLabel">
									Qr Code Scan
								</h2>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<span>If dont mind la heheh &#128151;</span>
								<img src={Qr1} width={350} height={500} />
								<img src={Qr2} width={335} height={450} />
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn"
									id="btnClose"
									data-bs-dismiss="modal"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
