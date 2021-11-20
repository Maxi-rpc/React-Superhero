import { Formik, Form, Field, ErrorMessage } from "formik";

export const SearchBar = () => {
	return (
		<>
			<Formik
				// valor del input
				initialValues={{
					search: "",
				}}
				validate={(valores) => {
					let errores = {};

					return errores;
				}}
				onSubmit={(valores, { resetForm }) => {
					resetForm();
					console.log(valores);
					console.log("form submit");
				}}
			>
				{({ errors }) => (
					<Form>
						<div className="d-flex">
							<Field
								className="form-control me-2"
								type="search"
								placeholder="Buscar"
								aria-label="Search"
								id="search"
								name="search"
							/>
							<button className="btn btn-outline-info">Buscar</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};
