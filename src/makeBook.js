import { mybook } from "./bookList.js";
import { updateBookList  } from "./updateList.js";

const inputName = document.querySelector("#name");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");


class bookInformation {
    constructor(name, author, pages) {
        this.name = name;
         this.author = author;
         this.pages = pages;
    }
}

function makeBook() {
    let tempName = inputName.value;
    let tempAuthor = inputAuthor.value;
    let tempPages = inputPages.value;

    let temp = new bookInformation(tempName, tempAuthor, tempPages);
    mybook.push(temp);

    updateBookList();
    
    inputName.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
}

export { makeBook };