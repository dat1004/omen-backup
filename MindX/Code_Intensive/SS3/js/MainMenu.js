//$ quy uoc tro vao 1 DOM
const $template = document.createElement("template");
$template.innerHTML = `
    <div class="main-menu">
      <div class="menu-item"><a href="./index.html">Home</a></div>
      <div class="menu-item"><a href="./about.html">About</a></div>
      <div class="menu-item"><a href="./contact.html">Contact</a></div>
    </div>
`;

export default class MainMenu extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));

    this.$menuItems = this.getElementsByClassName("menu-item"); //->HTMLCollection ~ array
  }

  //khai bao thuoc tinh cho the
  static get observedAttributes() {
    return ["active", "name"];
  }

  //chay khi gia tri thuoc tinh vua khai bao thay doi
  attributeChangedCallback(attrName, oldValue, newValue) {
    // console.log("Thuoc tinh " + attrName + " co gia tri la: " + newValue);
    if (attrName == "active") {
      //xoa class highlight o tat ca menu-item
      for (let $menuItems of this.$menuItems) {
        $menuItems.classList.remove("highlight");
      }

      // them class highlight vao cac phan tu menu-item chi dinh
      this.$menuItems[newValue]?.classList.add("highlight");
      //null safe operator -> neu left argument khong ton tai thi k chay right argument

      //   //tim the <div>
      //   this.$menuItems[newValue].style.backgroundColor = "red";
    }
  }
}

window.customElements.define("main-menu", MainMenu);
