//innitiate MemeCollection class
export class MemeCollection {
  id;
  name;
  owner;
  memes;

  constructor(id, name, owner, memes) {
    this.id = id;
    this.name = name;
    this.owner = owner;
    this.memes = memes;
  }

  add(meme) {
    if (meme instanceof Meme) {
      this.memes.push(meme);
    } else {
      console.log("meme not an instances of Meme");
    }
  }

  update(id, data) {
    for (let i = 0; i < this.memes.length; i++) {
      if (this.memes[i].id === id) {
        this.memes[i].name = data.name;
        this.memes[i].image = data.image;
      }
    }
  }

  delete(id) {
    for (let i = 0; i < this.memes.length; i++) {
      if (this.memes[i].id === id) {
        this.memes.splice(i, 1);
      }
    }
  }

  show() {
    console.log(this.memes);
  }
}

//innitiate Meme class
export class Meme extends MemeCollection {
  image;
  dateModified;

  constructor(id, name, owner, memes, image, dateModified) {
    super(id, name, owner, memes);
    this.image = image;
    this.dateModified = dateModified;
  }

  show() {
    let container = document.querySelector(".container");
    container.innerHTML = `
    <div>${this.name}</div>
    <img src=${this.image}>
    <div>${this.dateModified}</div>`;
  }

  update(data) {
    this.name = data.name;
    this.image = data.image;
  }
}
