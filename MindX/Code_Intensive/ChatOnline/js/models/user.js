import { getDataFromDocs } from "../utils.js";

export async function register(name, email, password) {
  await firebase.auth().createUserWithEmailAndPassword(email, password); //kha nang gap loi: email trung
  await firebase.auth().currentUser.updateProfile({
    displayName: name,
  });

  //luu document voi id la user's uid
  // await firebase.firestore().collection("users").add({ //auto generate uid for doc
  //   name: name,
  //   status: "free",
  //   currentConversation: "",
  // });

  //lay user's uid va gan cho document
  let docId = firebase.auth().currentUser.uid;
  //set = add || update
  await firebase.firestore().collection("users").doc(docId).set({
    //manually generate uid for doc
    name: name,
    status: "free",
    currentConversation: "",
  });
}

export async function login(email, password) {
  await firebase.auth().signInWithEmailAndPassword(email, password);
}

export function authStateChanged(callback) {
  //dang ky dang nhap dang xuat
  firebase.auth().onAuthStateChanged((user) => {
    callback(user);
  });
}

export async function getAllUsers() {
  let response = await firebase.firestore().collection("users").get();
  let data = getDataFromDocs(response.docs);
  return data;
  // console.log(response);
  // for (let doc of response.docs) {
  //   let obj = doc.data();
  //   obj.id = doc.id;

  //   console.log(doc.id, doc.data());
  // }
}

export function listenAllUsers(callback) {
  firebase
    .firestore()
    .collection("users")
    .onSnapshot((response) => {
      callback(getDataFromDocs(response.docs));
    });
}

export async function updateUser(id, data) {
  await firebase.firestore().collection("users").doc(id).update(data);
}

export async function updateCurrentUser(data) {
  let currentUser = firebase.auth().currentUser;
  await updateUser(currentUser.uid, data);
}
