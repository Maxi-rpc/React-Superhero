export default function Login() {
	return (
		<>
			<div className="row justify-content-md-center vh-100 bg-primary">
				<div className="col-md-4 align-self-center">
					<div className="card text-light bg-dark py-4">
						<div className="card-body">
							<h1 className="text-center h3">Iniciar Sesion</h1>
							<form action="">
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
								<div className="text-center">
									<button className="btn btn-primary">Iniciar Sesion</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
