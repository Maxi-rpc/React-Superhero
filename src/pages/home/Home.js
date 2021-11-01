import GetHeroes from "../../services/GetHeroes";

export default function Home() {
  const heroes = GetHeroes();
  console.log(heroes);

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
