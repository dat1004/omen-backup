import MessageContainer from "./MessageContainer.js";

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

    this.$list = this.querySelector(".message-list");
  }

  static get observedAttributes() {
    return ["messages"]; // json
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    let currentUser = firebase.auth().currentUser;
    if (attrName == "messages") {
      let data = JSON.parse(newValue);
      // console.log(data);
      this.$list.innerHTML = "";
      for (let message of data) {
        let $messageContainer = new MessageContainer();
        $messageContainer.setAttribute("content", message.content);
        $messageContainer.setAttribute(
          "owned",
          message.userId == currentUser.uid
        );

        this.$list.appendChild($messageContainer);
      }
    }
  }
}

window.customElements.define("message-list", MessageList);
