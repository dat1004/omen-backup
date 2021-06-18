import MainMenu from "./MainMenu.js";
import ComicContainer from "./ComicContainer.js";
import ComicList from "./ComicList.js";

import data from "./fakeData.js";

let $app = document.querySelector("#app");

//Tao object - ComicList
let $comicList = new ComicList();
//Truyen data vao ComicList
//Kieu du lieu cua thuoc tinh --> string
$comicList.setAttribute("comics", JSON.stringify(data));

for (let comic of data) {
  let $comicContainer = new ComicContainer();
  $comicContainer.setAttribute("name", comic.name);
  $comicContainer.setAttribute("description", comic.description);
  $comicContainer.setAttribute("author", comic.author);
  $comicContainer.setAttribute("lastest-release", comic.lastestRelease);
  $comicContainer.setAttribute("chapters", comic.chapters);
  $comicContainer.setAttribute("comments", comic.comments);
  $comicContainer.setAttribute("category", comic.category);
  $comicContainer.setAttribute("image", comic.image);

  $app.appendChild($comicContainer);
}
