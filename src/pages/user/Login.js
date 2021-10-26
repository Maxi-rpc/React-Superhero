import Banner from "../../components/banner/Banner.js";
import FormLogin from "../../components/form/Login.js";

export default function Login() {
  return (
    <>
      <div className="row justify-content-md-center vh-100 bg-primary">
        <div className="col-md-4 align-self-center">
          <FormLogin></FormLogin>
        </div>
        <div className="col-md-4 align-self-center">
          <Banner></Banner>
        </div>
      </div>
    </>
  );
}
