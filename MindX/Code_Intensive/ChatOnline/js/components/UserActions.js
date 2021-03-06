import {
  createConversation,
  getConversationById,
} from "../models/conversation.js";
import {
  getFlirtingUsers,
  updateCurrentUser,
  updateUser,
} from "../models/user.js";

const $template = document.createElement("template");
$template.innerHTML = `
    <div class="user-actions">
        <div class="status-free">
            <button class="action-btn flirt-btn">Let's flirt</button>
            <button class="action-btn bite-btn">Bite</button>
        </div>

        <div class="status-flirting">
            <button class="action-btn stop-flirting-btn">Stop Flirting</button>
        </div>

        <div class="status-chatting">
            <button class="action-btn end-conversation-btn">End conversation</button>
        </div>
    </div>
`;

export default class UserActions extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));

    this.$statusFree = this.querySelector(".status-free");
    this.$statusFlirting = this.querySelector(".status-flirting");
    this.$statusChatting = this.querySelector(".status-chatting");

    this.$flirtBtn = this.querySelector(".flirt-btn");
    this.$biteBtn = this.querySelector(".bite-btn");
    this.$stopFlirtingBtn = this.querySelector(".stop-flirting-btn");
    this.$endConversationBtn = this.querySelector(".end-conversation-btn");

    this.randomUser = null;
  }

  static get observedAttributes() {
    return ["status", "conversation-id"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "status") {
      this.$statusFree.style.display = "none";
      this.$statusFlirting.style.display = "none";
      this.$statusChatting.style.display = "none";

      if (newValue == "free") {
        this.$statusFree.style.display = "block";
      } else if (newValue == "flirting") {
        this.$statusFlirting.style.display = "block";
      } else if (newValue == "chatting") {
        this.$statusChatting.style.display = "block";
      }
    }
  }

  connectedCallback() {
    this.$flirtBtn.addEventListener("click", () => {
      updateCurrentUser({ status: "flirting" });
    });

    this.$biteBtn.addEventListener("click", async () => {
      // l???y to??n b??? flirting users
      let flirtingUsers = await getFlirtingUsers();

      if (flirtingUsers.length == 0) {
        alert("There are no flirting users");
        return;
      }

      // ch???n ng???u nhi??n
      // random 1 s???: l???n h??n ho???c b???ng 0 v?? b?? h??n chi???u d??i c???a m???ng
      let randomIndex = Math.floor(Math.random() * flirtingUsers.length);
      let randomUser = flirtingUsers[randomIndex];

      // this.saveRandomUser(randomUser.id);

      let currentUser = firebase.auth().currentUser;
      // gh??p ????i

      // t???o 1 conversation
      let newConversation = await createConversation([
        currentUser.uid,
        randomUser.id,
      ]);
      // console.log(newConversation);

      updateCurrentUser({
        status: "chatting",
        currentConversation: newConversation.id,
      });
      updateUser(randomUser.id, {
        status: "chatting",
        currentConversation: newConversation.id,
      });
    });

    this.$stopFlirtingBtn.addEventListener("click", () => {
      updateCurrentUser({ status: "free" });
    });

    this.$endConversationBtn.addEventListener("click", async () => {
      // updateCurrentUser({ status: "free", currentConversation: "" });
      // let randomUserId = this.getRandomUser();
      // updateUser(randomUserId, { status: "free", currentConversation: "" });
      // let conversation = await getConversationById();

      // lay id cua conversation
      let conversationId = this.getAttribute("conversation-id");

      //lay duoc conversation hien tai tu firestore
      let currentConversation = await getConversationById(conversationId);

      //lay dc nguoi dung tham gia
      let memberIds = currentConversation.users;

      //cap nhat trang thai ng tham gia
      for (let memberId of memberIds) {
        updateUser(memberId, { status: "free", currentConversation: "" });
      }
    });
  }

  saveRandomUser(userId) {
    localStorage.setItem("random-user-id", userId);
  }

  getRandomUser() {
    return localStorage.getItem("random-user-id");
  }
}

window.customElements.define("user-actions", UserActions);
