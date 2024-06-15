import { makeBook } from "./makeBook.js";
import { mybook } from "./bookList.js";

const submitButton = document.querySelector("#submitBook");

submitButton.addEventListener("click", makeBook);
