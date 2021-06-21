import { updateCurrentUser, updateUser } from "../models/user.js";

const $template = document.createElement("template");
$template.innerHTML = `
    <div class="user-actions">
        <div class="status-free">
            <button class="action-btn flirt-btn">Flirt</button>
            <button class="action-btn bite-btn">Bite</button>
        </div>

        <div class="status-flirting">
            <button class="action-btn stop-flirting-btn">Stop Flirting</buton>
        </div>

        <div class="status-chatting">
            <button class="action-btn end-conversation-btn">End Conversation</button>
        </div>
    </div>
`;

export default class UserActions extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));

    this.$flirtBtn = this.querySelector(".flirt-btn");
    this.$biteBtn = this.querySelector(".bite-btn");
    this.$stopFlirtingBtn = this.querySelector(".stop-flirting-btn");
    this.$endConversationBtn = this.querySelector(".end-conversation-btn");
  }

  connectedCallback() {
    this.$flirtBtn.addEventListener("click", () => {
      updateCurrentUser({ status: "flirting" });
    });

    this.$biteBtn.addEventListener("click", () => {
      updateCurrentUser({ status: "chatting" });
    });

    this.$stopFlirtingBtn.addEventListener("click", () => {
      updateCurrentUser({ status: "free" });
    });

    this.$endConversationBtn.addEventListener("click", () => {
      updateCurrentUser({ status: "free", currentConversation: "" });
    });
  }
}

window.customElements.define("user-actions", UserActions);
