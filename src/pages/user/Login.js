import FormLogin from "../../components/form/Login.js";

export default function Login() {
	return (
		<>
			<div className="row my-5 justify-content-md-center align-items-center">
				<div className="col-md-4">
					<div className="card text-light bg-dark py-4">
						<div className="card-body">
							<h1 className="text-center h3">Iniciar Sesion</h1>
							<div class="alert alert-primary" role="alert">
								Utilizar las siguientes credenciales: <br />
								<strong>email: challenge@alkemy.org / password: react</strong>
							</div>
							<FormLogin></FormLogin>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
