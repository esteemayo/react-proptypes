import http from "./httpService";

const apiEndPoint = "/react-prop-types-example";

export function getProducts() {
  return http.get(apiEndPoint);
}
