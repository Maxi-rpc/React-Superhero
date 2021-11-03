import Banner from "../../components/banner/Banner.js";
import FormLogin from "../../components/form/Login.js";

export default function Login() {
	return (
		<>
			<div className="row py-5 justify-content-md-center align-items-center">
				<div className="col-md-4">
					<FormLogin></FormLogin>
				</div>
				<div className="col-md-4">
					<Banner></Banner>
				</div>
			</div>
		</>
	);
}
