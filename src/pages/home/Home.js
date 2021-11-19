import { Title } from "../../components/title/Title";
import { Card } from "../../components/card/Card";

export default function Home() {
  return (
    <>
      <Title titulo="Home"></Title>
      <div className="row">
        <div className="col-3">
          <Card nombre="batman" imagen=""></Card>
        </div>
      </div>
    </>
  );
}
