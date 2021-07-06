import { addMessage } from "../models/conversation.js";

const $template = document.createElement("template");
$template.innerHTML = `
    <form class="send-message-form">
        <input type="text" class="message-content" placeholder="Enter Message Content">
        <button>Send</button>
    </form>
`;

export default class SendMessageForm extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));

    this.$form = this.querySelector(".send-message-form");
    this.$content = this.querySelector(".message-content");
  }

  static get observedAttributes() {
    return ["conversation-id"];
  }

  connectedCallback() {
    this.$form.onsubmit = async (event) => {
      event.preventDefault();
      let messageContent = this.$content.value.trim();
      if (messageContent == "") return;

      let conversationId = this.getAttribute("conversation-id");

      await addMessage(conversationId, messageContent);
      this.$content.value = "";
    };
  }
}

window.customElements.define("send-message-form", SendMessageForm);
