import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { url } from "../../helpers/urlConfig.js";
import { fetchLogin } from "./fetchLogin.js";

export async function main() {
  const promise = loadComponent(
    ".wrapper-login",
    url.pages.login + "index.html"
  );

  promise
    .then(() => {
      smoothScroll();
      fetchLogin();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
