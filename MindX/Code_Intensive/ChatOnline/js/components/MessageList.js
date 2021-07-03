const $template = document.createElement("template");
$template.innerHTML = `
    <div class="message-list">
        <message-container content="have you eaten?" owned="true"></message-container>
        <message-container content="Yep" owned="false"></message-container>
        <message-container content="with whom" owned="true"></message-container>
        <message-container content="by myself" owned="false"></message-container>
    </div>
`;

export default class MessageList extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["messages"]; // json
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "messages") {
      let data = JSON.parse(newValue);
      console.log(data);
    }
  }
}

window.customElements.define("message-list", MessageList);
