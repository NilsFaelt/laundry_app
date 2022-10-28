import axios, { AxiosPromise } from "axios";

export async function fetchFake() {
  const response = await axios<AxiosPromise>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return response;
}
