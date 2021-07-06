import { listenCurrentUser } from "../models/user.js";
import { getConversationById } from "../models/conversation.js ";
import { listenConversation } from "../models/conversation.js";

const $template = document.createElement("template");
$template.innerHTML = `
    <div class="chat-screen">
        <div class="aside-left">
            <app-stat></app-stat>
            <user-actions></user-actions>
        </div>

        <div class="chat-container">
          <message-list></message-list>
          <send-message-form></send-message-form>
        </div>
    </div>
`;

// fake message
let messages = [
  { content: "No conversation, flirt or bite to connect", owned: true },
];

export default class ChatScreen extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));

    this.$userActions = this.querySelector("user-actions");
    this.$messageList = this.querySelector("message-list");
    this.$sendMessageForm = this.querySelector("send-message-form");
  }

  connectedCallback() {
    listenCurrentUser(async (user) => {
      console.log(user);
      this.$userActions.setAttribute("status", user.status);
      this.$userActions.setAttribute(
        "conversation-id",
        user.currentConversation
      );

      this.$sendMessageForm.setAttribute(
        "converstation-id",
        user.currentConversation
      );

      if (user.currentConversation) {
        listenConversation(user.currentConversation, (conversation) => {
          // Lay message tu conv
          let messages = conversation.messages;
          //do du lieu message vao message-list
          this.$messageList.setAttribute("messages", JSON.stringify(messages));
        });
        // // lay conv hien tai
        // let conversation = await getConversationById(user.currentConversation);
      } else {
        this.$messageList.setAttribute("messages", JSON.stringify(messages));
      }
    });
    //this.$messageList.setAttribute("messages", JSON.stringify(messages));
  }
}

window.customElements.define("chat-screen", ChatScreen);
