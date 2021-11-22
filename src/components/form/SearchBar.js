import { Formik, Form, Field, ErrorMessage } from "formik";
import { GetHero } from "../../services/GetHero";

export const SearchBar = () => {
	let resultado = {};

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
					resultado = GetHero(valores.search);
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
			<div className="alert">{console.log(resultado)}</div>
		</>
	);
};
