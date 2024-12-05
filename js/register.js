import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { url } from "../../helpers/urlConfig.js";
import { fetchRegister } from "./fetchRegister.js";

export async function main() {
  const promise = loadComponent(
    ".wrapper-register",
    url.pages.register + "index.html"
  );

  promise
    .then(() => {
      smoothScroll();
      fetchRegister();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
