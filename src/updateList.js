import { mybook } from "./bookList.js";

const bookshelv = document.querySelector(".bookshelv")

function updateBookList() {
    mybook.forEach((item, index) => {

        let tempName = item.name;
        let tempAuthor = item.author;
        let tempPages = item.pages;

        let bookExistOrNot = false;

        for (let i = 0; i < bookshelv.children.length; i ++) {
            let tempChild = bookshelv.children[i];
            let tempChildImg = tempChild.querySelector("img");

            if (tempChild) {
                let titleAttribute = tempChildImg.getAttribute("title");
                if (titleAttribute.includes(`Name: ${tempName}`) && titleAttribute.includes(`Author: ${tempAuthor}`)) {
                    bookExistOrNot = true;
                    break;
                }
            }
        }

        if (!bookExistOrNot) {
            let tempDiv = document.createElement("div");
            let tempDivImg = document.createElement("img");

            tempDivImg.setAttribute("src", "../assets/images.jpg")
            tempDivImg.setAttribute("title", `Name: ${tempName}, Author: ${tempAuthor}, Pages: ${tempPages}`)

            tempDiv.setAttribute("class", "animateBook");
            tempDiv.appendChild(tempDivImg);

            

            bookshelv.appendChild(tempDiv);
        }
        
    })
}

export { updateBookList };

            