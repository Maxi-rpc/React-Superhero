import axios from "axios";
import { API } from "./Api";

export function GetHeroDefault() {
  const hero = {
    response: "success",
    id: "149",
    name: "Captain America",
    powerstats: {
      intelligence: "69",
      strength: "19",
      speed: "38",
      durability: "55",
      power: "60",
      combat: "100",
    },
    biography: {
      "full-name": "Steve Rogers",
      "alter-egos": "No alter egos found.",
      aliases: ["Nomad", "The Captain"],
      "place-of-birth": "Manhattan, New York City, New York",
      "first-appearance": "Captain America Comics #1 (March 1941)",
      publisher: "Marvel Comics",
      alignment: "good",
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["240 lb", "108 kg"],
      "eye-color": "blue",
      "hair-color": "blond",
    },
    work: {
      occupation:
        "Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.",
      base: "New York City",
    },
    connections: {
      "group-affiliation":
        "Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)",
      relatives:
        "Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)",
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg",
    },
  };

  return hero;
}

export function GetHero() {
  let result = "";
  const axiosInstance = axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  axiosInstance
    .get(API + 1)
    .then(function (response) {
      result = "get ok";
    })
    .catch(function (error) {
      if (error.response) {
        console.log("error response");
      } else if (error.request) {
        console.log("error request");
      }
      result = "error al enviar el get";
    });
  return result;
}
