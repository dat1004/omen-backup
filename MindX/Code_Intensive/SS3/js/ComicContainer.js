const $template = document.createElement("template");
$template.innerHTML = `
    <div class="comic-container">

        <div class="comic-info">
            <img class="comic-image" src="https://i.redd.it/i7ykg4zrolx61.jpg" alt="">
            <div style="width: 100%">
                <div class="comic-name">Hentai</div>
                <div class="comic-description">lorem whatever shit</div>
            </div>
        </div>
        
        <div class="comic-detail">
            <div class="comic-author">Oi doi oi</div>
            <div class="comic-lastest-release">2012/06/04</div>
            <div class="comic-chapters">20 Chapters</div>
            <div class="comic-comments">30 Comments</div>
            <div class="comic-category">bat ngo vcc</div>
        </div>

    </div>
`;

export default class ComicContainer extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));

    this.$name = this.querySelector(".comic-name");
    this.$description = this.querySelector(".comic-description");
    this.$author = this.querySelector(".comic-author");
    this.$lastestRelease = this.querySelector(".comic-lastest-release");
    this.$chapters = this.querySelector(".comic-chapters");
    this.$comments = this.querySelector(".comic-comments");
    this.$category = this.querySelector(".comic-category");
    this.$image = this.querySelector(".comic-image");
  }

  //khai bao thuoc tinh
  static get observedAttributes() {
    return [
      "name",
      "description",
      "author",
      "lastest-release",
      "chapters",
      "comments",
      "category",
      "image",
    ];
  }

  //chay khi gia tri thuoc tinh khai bao o tren thay doi
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "name") {
      this.$name.innerHTML = newValue;
    } else if (attrName == "description") {
      this.$description.innerHTML = newValue;
    } else if (attrName == "author") {
      this.$author.innerHTML = newValue;
    } else if (attrName == "lastest-release") {
      this.$lastestRelease.innerHTML = newValue;
    } else if (attrName == "chapters") {
      this.$chapters.innerHTML = newValue + " chapters";
    } else if (attrName == "comments") {
      this.$comments.innerHTML = newValue + " comments";
    } else if (attrName == "category") {
      this.$category.innerHTML = newValue;
    } else if (attrName == "image") {
      this.$image.src = newValue;
    }
  }

  connectedCallback() {
    console.log("lan dau tien xuat hien");
  }

  disconnectedCallback() {
    console.log("bay mau");
  }
  //Component Lifecycle
}

window.customElements.define("comic-container", ComicContainer);
