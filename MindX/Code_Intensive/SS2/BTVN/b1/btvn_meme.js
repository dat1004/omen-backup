import { Meme, MemeCollection } from "./memeClass.js";

//create new Collection and Meme
let datCollection = new MemeCollection(1, "firstCollection", "Dat Nguyen", []);

let thinkMark = new Meme(
  1,
  "Think Mark",
  null,
  null,
  "https://i.redd.it/i7ykg4zrolx61.jpg",
  "02/06/2021"
);

let leoMeme = new Meme(
  2,
  "Leo Meme",
  null,
  null,
  "https://i.pinimg.com/236x/f8/40/f5/f840f548d247ea3944d24dd7b92e43c9.jpg",
  "03/06/2021"
);

let pickleRick = new Meme(
  3,
  "Pickle Rick",
  null,
  null,
  "https://i.kym-cdn.com/entries/icons/original/000/023/608/picklerick.jpg",
  "04/06/2021"
);

// console.log(thinkMark);

datCollection.add(thinkMark);
datCollection.add(leoMeme);
datCollection.add(pickleRick);
datCollection.show();

thinkMark.show();
thinkMark.update({
  name: "agathaMeme",
  image: "https://data.junkee.com/wp-content/uploads/2021/03/KHahn.png",
});

datCollection.delete(1);
console.log(datCollection);
