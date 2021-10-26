import { GetHeroRandom } from "../../services/getHero";

export default function Banner() {
  const imageUrl = GetHeroRandom();
  return (
    <>
      <img src={imageUrl} alt="" className="img-fluid" />
    </>
  );
}
