import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Form.css";

export default function FormLogin() {
  return (
    <>
      <Formik
        // valores de los inputs
        initialValues={{
          email: "",
          password: "",
        }}
        // validar errores
        validate={(valores) => {
          let errores = {};

          // validar email
          if (!valores.email) {
            errores.email = "El campo Email no puede estar vacio";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "El Email debe ser valido";
          }

          // validar password
          if (!valores.password) {
            errores.password = "El campo password no puede estar vacio";
          }

          // devolver obj errores
          return errores;
        }}
        // envio de formulario
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log(valores);
          console.log("form submit");
        }}
      >
        {({ errors }) => (
          // formulario
          <Form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <Field
                className="form-control text-light bg-dark"
                type="email"
                name="email"
                id="email"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="error-input">{errors.email}</div>
                )}
              ></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                className="form-control text-light bg-dark"
                type="password"
                name="password"
                id="password"
              />
              <ErrorMessage
                name="password"
                component={() => (
                  <div className="error-input">{errors.password}</div>
                )}
              ></ErrorMessage>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-primary">Iniciar Sesion</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
