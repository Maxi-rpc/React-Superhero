import { Formik } from "formik";

export default function FormLogin() {
	return (
		<>
			<div className="card text-light bg-dark py-4">
				<div className="card-body">
					<h1 className="text-center h3">Iniciar Sesion</h1>
					<Formik
						initialValues={{
							email: "",
							password: "",
						}}
						validate={(valores) => {
							let errores = {};
						}}
						onSubmit={(valores) => {
							console.log("form submit");
						}}
					>
						{({ values, handleSubmit, handleChange, handleBlur }) => (
							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label htmlFor="email" className="form-label">
										Email
									</label>
									<input
										className="form-control text-light bg-dark"
										type="email"
										name="email"
										id="email"
										value={values.email}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="password" className="form-label">
										Password
									</label>
									<input
										className="form-control text-light bg-dark"
										type="password"
										name="password"
										id="password"
										value={values.password}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</div>
								<div className="text-center mt-4">
									<button className="btn btn-primary">Iniciar Sesion</button>
								</div>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</>
	);
}
