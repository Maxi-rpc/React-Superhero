import FormLogin from "../../components/form/Login.js";

export default function Login() {
  return (
    <>
      <div className="row my-5 py-5 justify-content-md-center align-items-center">
        <div className="col-md-4">
          <div className="card text-light bg-dark py-4">
            <div className="card-body">
              <h1 className="text-center h3">Iniciar Sesion</h1>
              <FormLogin></FormLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
