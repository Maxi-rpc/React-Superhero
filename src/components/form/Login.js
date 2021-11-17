import { Formik } from "formik";

export default function FormLogin() {
	return (
		<>
			<div className="card text-light bg-dark py-4">
				<div className="card-body">
					<h1 className="text-center h3">Iniciar Sesion</h1>
					<Formik>
						<form>
							<div className="mb-3">
								<label className="form-label">Email</label>
								<input
									className="form-control text-light bg-dark"
									type="email"
									name="email"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Password</label>
								<input
									className="form-control text-light bg-dark"
									type="password"
									name="password"
								/>
							</div>
							<div className="text-center mt-4">
								<button className="btn btn-primary">Iniciar Sesion</button>
							</div>
						</form>
					</Formik>
				</div>
			</div>
		</>
	);
}
