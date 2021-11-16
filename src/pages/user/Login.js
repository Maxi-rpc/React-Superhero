import Banner from "../../components/banner/Banner.js";
import FormLogin from "../../components/form/Login.js";
import { GetHeroDefault, GetHero } from "../../services/GetHero.js";

export default function Login() {
  const heroe = GetHeroDefault();
  const her = GetHero();
  console.log(her);
  return (
    <>
      <div className="row py-5 justify-content-md-center align-items-center">
        <div className="col-md-4">
          <FormLogin></FormLogin>
        </div>
        <div className="col-md-4">
          <Banner image={heroe.image.url} width="50%" height=""></Banner>
        </div>
      </div>
    </>
  );
}
