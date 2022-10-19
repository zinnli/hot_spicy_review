import axios from "axios";

export const axiosPocket = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
