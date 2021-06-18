import ComicContainer from "./ComicContainer.js";

const $template = document.createElement("template");
$template.innerHTML = `
<div class="comic-list"></div>
`;

export default class ComicList extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));

    this;
  }

  static get observedAttributes() {
    return ["comics"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "comics") {
      let data = JSON.parse(newValue);

      for (let comic of data) {
        let $comicContainer = new ComicContainer();
      }
    }
  }
}

window.customElements.define("comic-list", ComicList);
