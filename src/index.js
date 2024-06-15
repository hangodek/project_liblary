import { makeBook } from "./makeBook.js";
import { mybook } from "./bookList.js";
import "./mystyle.css";


const submitButton = document.querySelector("#submitBook");

submitButton.addEventListener("click", makeBook);
